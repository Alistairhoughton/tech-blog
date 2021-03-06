const sequelize = require('../config/connection');
const { Blog, User, Comment } = require('../models');
const router = require('express').Router();
const withAuth = require("../utils/auth");

// ============================= testing function

// router.get("/", async (req, res) => {
//     try {
//       res.render("newpost")
//     } catch (err) {
//       res.sendStatus(500).send(err);
//     }
// });

// =================================================

router.get("/", async (req, res) => {
  try {
    const blogs = (await Blog.findAll({
      include: [{ model: User }, { model: Comment}],
    })).map(blog => blog.get({plain: true}));
    res.render("home", { blogs, logged_in: req.session.logged_in })
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", async (req, res) => {
    try {
      res.render("login", { logged_in: req.session.logged_in })
    } catch (err) {
      res.sendStatus(500).send(err);
    }
});

router.get("/signup", async (req, res) => {
  try {
    res.render("signup", { logged_in: req.session.logged_in } )
  } catch (err) {
    res.sendStatus(500).send(err);
  }
});

// ==========================================/ with comments

router.get("/main/:id", async (req, res) => {
  try {
    const blog = (
      await Blog.findOne({
        where: { id: req.params.id },
        attributes: ["id", "title", "content", "createdAt"],
        include: [
          {
            model: Comment,
            attributes: [
              "id",
              "comment_text",
              "user_id",
              "blog_id",
              "createdAt",
            ],
            include: { model: User, attributes: ["username"] },
          },
          { model: User, attributes: ["username"] },
        ],
      })
    ).get({ plain: true });
    res.render("single-blog", { ...blog, logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).send(err);
  }
});

// =================================================

module.exports = router



