const router = require("express").Router();
const { Comment } = require("../../models");
// const withAuth = require("../../utils/auth");

// ============================ get all comments 

router.get("/", async (req, res) => {
  try {
    const comment = await Comment.findAll({}); 
    res.status(200).json(comment);
  } catch (err) {
    res.status(500).json(err);
  }
});

// ========================= new comment

router.post("/", async (req, res) => {
  try {
    const newComment = await Comment.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

// ================================================================ delete Comment

router.delete("/:id", async (req, res) => {
  try {
    const deleteComment = await Comment.destroy({
      where: { id: req.params.id },
    });
    res.status(200).json(deleteComment);
  } catch (err) {
    res.status(500).json(err);
  }
});

//not even sure where I would implement delete

module.exports = router;
