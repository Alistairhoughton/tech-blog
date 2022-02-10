const router = require("express").Router();
const { User } = require("../../models");
// const withAuth = require("../../utils/auth");

router.get("/", async (req, res) => {
  try {
    const userName = (await User.findAll()).map(user => user.get({plain: true})); 
    res.render("home", { userName })
    console.log(userName);
  } catch (err) {
    res.status(500).json(err);
  }
});

// ======================================= Create new user

// router.post("/", withAuth, async (req, res) => {
router.post("/", async (req, res) => {
  try {
    const userData = await User.create({
      username: req.body.username,
      password: req.body.password,
    });
    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.user_id = userData.id
      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// ==================================== Login Route

router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({
      where: { username: req.body.username },
    });
    if (!userData) {
      res.status(400).json({ message: "No user found" });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);
    if (!validPassword) {
      res.status(400).json({ message: "Incorrect password" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// ================================================== logout route

router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const userData = await User.destroy({
      where: { id: req.params.id },
    });
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
