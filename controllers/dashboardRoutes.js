// if not logged in show log in page? 
//if logged in show add post button. 
//add post button brings up form of title and content. 
// if there is already a post, also has a update button

const sequelize = require('../config/connection');
const { Blog, User, Comment } = require('../models');
const router = require('express').Router();


router.get("/", async (req, res) => {
    try {
      const users = (await User.findAll()).map(user => user.get({plain: true})); 
      res.render("dashboard", { users })
      console.log(users);
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.get("/", async (req, res) => {
    try {
    const userPosts = (await Blog.findAll({
        where: {
            user_id: req.session.id
        },
        attributes: [
            'id',
            'title',
            'content',
            'created_at'
        ],
        include: [{
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })).map(user => user.get({plain: true}));
    res.render('dashboard', { posts })
    } catch (err) {
        res.status(500).json(err);
    }
});

//   res.render('dashboard', { posts, loggedIn: true });






module.exports = router;













