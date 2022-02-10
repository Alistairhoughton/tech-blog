const router = require('express').Router();
const blogRoutes = require('./api/blogRoutes.js');
const commentRoutes = require('./api/commentRoutes.js');
const userRoutes = require('./api/userRoutes.js');
const homeRoutes = require('./homeRoutes');
const dashboardRoutes = require('./dashboardRoutes');

router.use("/blogs", blogRoutes);
router.use("/users", userRoutes);
router.use("/comments", commentRoutes);
router.use("/", homeRoutes);
router.use("/dashboard", dashboardRoutes);

module.exports = router