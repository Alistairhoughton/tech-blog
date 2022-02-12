const { Blog, User, Comment } = require("../models");
const router = require("express").Router();
const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
    try {
      const blogs = (await Blog.findAll({
        where: {
            user_id: req.session.user_id,
          },
        include: [{ model: User }],
      })).map(blog => blog.get({plain: true}));
      res.render("dashboard", { blogs, logged_in: req.session.logged_in })
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get("/", withAuth, async (req, res) => {
    try {
      const blogs = (await Blog.findAll({
        where: {
            user_id: req.session.user_id,
          },
        include: [{ model: User }],
      })).map(blog => blog.get({plain: true}));
      res.render("dashboard", { blogs, logged_in: req.session.logged_in })
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get("/newpost", withAuth, async (req, res) => {
    try {
      res.render("newpost", { logged_in: req.session.logged_in } )
    } catch (err) {
      res.sendStatus(500).send(err);
    }
  });

module.exports = router;


// router.get("/", async (req, res) => {
//     try {
  //       const users = (await User.findAll()).map(user => user.get({plain: true}));
  //       res.render("dashboard", { users, logged_in: req.session.logged_in })
//       console.log(users);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });

// router.get("/get", async (req, res) => {
//   try {
//     const blogs = (
//       await Blog.findAll({
//         where: {
//           user_id: req.session.user_id,
//         },
//         attributes: ["id", "title", "content", "created_at"],
//         include: [
//           {
//             model: Comment,
//             attributes: [
//               "id",
//               "comment_text",
//               "post_id",
//               "user_id",
//               "created_at",
//             ],
//           },
//           {
//             model: User,
//             attributes: ["username"],
//           },
//         ],
//       })
//     ).map((blog) => blog.get({ plain: true }));
//     res.render("dashboard", { blogs, logged_in: req.session.logged_in });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// testing data =====================================

// router.get("/get", async (req, res) => {
//     try {
//       const blogData = (await Blog.findAll({
//         where: {
//             user_id: req.session.user_id,
//           }
//         })).map((blog) =>
//         blog.get({ plain: true })
//         );
//         console.log(req.session.user_id);
//       res.status(200).json(blogData);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });

//   ================================================================

