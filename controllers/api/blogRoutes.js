const router = require("express").Router();
const { Blog, User } = require("../../models");
// const withAuth = require("../../utils/auth");

// ==================working get request


router.get("/getblogs/getblogs", async (req, res) => {
  try {
    const blogData = (await Blog.findAll()).map((blog) =>
      blog.get({ plain: true })
    );
    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// ======================================= working post request

router.post("/", async (req, res) => {
  try {
    const newBlog = await Blog.create(req.body);
    res.json(newBlog);
  } catch (err) {
    console.error(err);
    res.sendStatus(500).send(err);
  }
});



// =======================================
// router.get("/", async (req, res) => {
//   try {
//     const blogs = (
//       await Blog.findAll({
//         include: [{ model: User }],
//       })
//     ).map((blog) => blog.get({ plain: true }));
//     res.render("blogs", { blogs });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });


// ================== find all blogs returns data!

// router.get("/", async (req, res) => {
//   try {
//     const blogData = (await Blog.findAll()).map((blog) =>
//       blog.get({ plain: true })
//     );
//     res.status(200).json(blogData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get("/id", async (req, res) => {
//   try {
//     const blogs = (
//       await Blog.findByPk(req.params.id, {
//         include: [{ model: User }],
//       })
//     ).map((blog) => blog.get({ plain: true }));
//     res.render("blogs", { blogs });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // get single
// router.get("/:id", async (req, res) => {
//   try {
//     const blog = (await Blog.findByPk(req.params.id)).get({plain: true});
//     res.render("blogs/single-blog", {...blog});
//   } catch (err) {
//     res.sendStatus(500).send(err);
//   }
// });

// add a blog

// // update a blog
// router.put("/:id", async (req, res) => {
//   try {
//     const updatedBlog = await Blog.update(req.body);
//     res.json(updatedBlog);
//   } catch (err) {
//     res.sendStatus(500).send(err);
//   }
// });

// // delete a blog
// router.delete("/:id", async (req, res) => {
//   try {
//     const deletedBlog = await Blog.destroy(req.body);
//     res.json(deletedBlog);
//   } catch (err) {
//     res.sendStatus(500).send(err);
//   }
// });

module.exports = router;
