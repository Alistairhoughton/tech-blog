const router = require('express').Router();
const blogRoutes = require('./api/blogRoutes.js');
const commentRoutes = require('./api/commentRoutes.js');
const userRoutes = require('./api/userRoutes.js');
const homeRoutes = require('./homeRoutes.js');
const dashboardRoutes = require('./dashboardRoutes.js');

router.use("/blogs", blogRoutes);
router.use("/users", userRoutes);
router.use("/comment", commentRoutes);
router.use("/", homeRoutes);
router.use("/dashboard", dashboardRoutes);

module.exports = router;