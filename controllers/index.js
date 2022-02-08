const router = require('express').Router();
const blogRoutes = require('./api/blogRoutes.js');
const commentRoutes = require('./api/commentRoutes.js');
const userRoutes = require('./api/userRoutes.js');

router.use("/blogs", blogRoutes);
router.use("/users", userRoutes);
router.use("/comments", commentRoutes);

module.exports = router