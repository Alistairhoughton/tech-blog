const router = require("express").Router();
const { Comment, Blog, User } = require("../../models");
const withAuth = require("../../utils/auth");

// get all comments

router.get("/", async (req, res) => {
  try {
    const commentData = await Comment.findAll();
    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// add a new comment

router.post("/", async (req, res) => {
  if (req.session) {
    try {
      const newComment = await Comment.create({
        comment_text: req.body.comment_text,
        user_id: req.body.user_id,
        // user_id: req.session.user_id,
        blog_id: req.body.blog_id,
      });
      res.status(200).json(newComment);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
});



// =================================

module.exports = router;
