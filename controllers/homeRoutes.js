const sequelize = require('../config/connection');
const { blog, User, Comment } = require('../models');
const router = require('express').Router();

router.get("/", async (req, res) => {
    try {
      res.render("home")
    } catch (err) {
      res.sendStatus(500).send(err);
    }
});

module.exports = router