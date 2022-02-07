const router = require("express").Router();
const { Blog } = require("../models");

// get all blogs
router.get("/", async (req, res) => {
  try {
    const blogs = (await Blog.findAll()).map(blog => blog.get({plain: true}));
    res.render("blogs/blogs", {blogs})
  } catch (err) {
    res.sendStatus(500).send(err);
  }
});

// get single
router.get("/:id", async (req, res) => {
  try {
    const blog = (await Blog.findByPk(req.params.id)).get({plain: true});
    res.render("blogs/single-blog", {...blog});
  } catch (err) {
    res.sendStatus(500).send(err);
  }
});

// add a blog
router.post("/", async (req, res) => {
  try {
      console.log(req.body)
    const newBlog = await Blog.create(req.body);
    res.json(newBlog);
  } catch (err) {
      console.error(err)
    res.sendStatus(500).send(err);
  }
});

// update a blog
router.put("/:id", async (req, res) => {
  try {
    const updatedBlog = await Blog.update(req.body);
    res.json(updatedBlog);
  } catch (err) {
    res.sendStatus(500).send(err);
  }
});

// delete a blog
router.delete("/:id", async (req, res) => {
  try {
    const deletedBlog = await Blog.destroy(req.body);
    res.json(deletedBlog);
  } catch (err) {
    res.sendStatus(500).send(err);
  }
});

module.exports = router;
