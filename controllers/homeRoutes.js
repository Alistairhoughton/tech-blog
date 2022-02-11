const sequelize = require('../config/connection');
const { Blog, User, Comment } = require('../models');
const router = require('express').Router();

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
      include: [{ model: User }],
    })).map(blog => blog.get({plain: true}));
    res.render("home", { blogs })
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", async (req, res) => {
    try {
      res.render("login")
    } catch (err) {
      res.sendStatus(500).send(err);
    }
});

router.get("/signup", async (req, res) => {
  try {
    res.render("signup")
  } catch (err) {
    res.sendStatus(500).send(err);
  }
});

router.get("/dashboard", async (req, res) => {
  try {
    res.render("dashboard")
  } catch (err) {
    res.sendStatus(500).send(err);
  }
});

router.get("/newpost", async (req, res) => {
  try {
    res.render("newpost")
  } catch (err) {
    res.sendStatus(500).send(err);
  }
});


module.exports = router
