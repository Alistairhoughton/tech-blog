const router = require("express").Router();
const { Blog, User } = require("../../models");
const withAuth = require("../../utils/auth");

// ==================working get request


router.get("/", async (req, res) => {
  try {
    const blogData = (await Blog.findAll()).map((blog) =>
      blog.get({ plain: true })
    );
    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// ================================== single blog by by id


router.get("/:id", async (req, res) => {
  try {
    const blogData = (await Blog.findByPk(req.params.id)).get({ plain: true });
    res.status(200).json(blogData);
  } catch (err) {
    res.sendStatus(500).send(err);
  }
});

// ================================================================== update a blog


router.put("/:id", withAuth,  async (req, res) => {
  try {
    const updateBlog = await Blog.update(req.body, {where: { id: req.params.id}});
    res.json(updateBlog)
  } catch (err) {
    res.sendStatus(500).send(err);
  }
});


// ============================================ post with user ID from the form

router.post("/", async (req, res) => {
  try {
    const newBlog = await Blog.create({
          title: req.body.title,
          content: req.body.content,
          user_id: req.session.user_id
        });
        res.json(newBlog);
        console.log("this is posting from the user");
      } catch (err) {
        console.error(err);
    res.sendStatus(500).send(err);
  }
});

// ===================================================================== delete a blog

router.delete("/:id", async (req, res) => {
  try {
    const deleteBlog = await Blog.destroy({where: { id: req.params.id}});
    res.json(deleteBlog)
  } catch (err) {
    res.sendStatus(500).send(err);
  }
});





module.exports = router;
