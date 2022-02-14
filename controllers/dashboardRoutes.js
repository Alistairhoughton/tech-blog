const { Blog, User, Comment } = require("../models");
const router = require("express").Router();
const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
    try {
      const blogs = (await Blog.findAll({
        where: {
            user_id: req.session.user_id,
          },
        include: [{ model: User }],
      })).map(blog => blog.get({plain: true}));
      res.render("dashboard", { blogs, logged_in: req.session.logged_in })
    } catch (err) {
      res.status(500).json(err);
    }
  });

 
  router.get("/newpost", withAuth, async (req, res) => {
    try {
      res.render("newpost", { logged_in: req.session.logged_in } )
    } catch (err) {
      res.sendStatus(500).send(err);
    }
  });

  // ============================= rendering update page

  router.get("/update", async (req, res) => {
    try {
      res.render("update")
    } catch (err) {
      res.sendStatus(500).send(err);
    }
});

  //=======================================================


  router.get("/update/:id", withAuth, async (req, res) => {
    try {
      const blog = (await Blog.findByPk(req.params.id)).get({ plain: true });
      res.render("update", { ...blog, logged_in: req.session.logged_in });
    } catch (err) {
      res.sendStatus(500).send(err);
    }
  });

  module.exports = router;


