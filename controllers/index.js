const router = require('express').Router();
const blogRoutes = require('./blogRoutes');
const commentRoutes = require('./commentRoutes');
const userRoutes = require('./api/userRoutes');

router.use("/blogs", blogRoutes);
router.use("/users", userRoutes);
router.use("/comments", commentRoutes);

module.exports = router