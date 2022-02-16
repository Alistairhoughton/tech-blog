const Blog = require("./Blog");
const User = require("./User");
const Comment = require("./Comment");

User.hasMany(Blog, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });

Blog.belongsTo(User,{
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
})

Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: "cascade"
});

Comment.belongsTo(Blog, {
  foreignKey: 'blog_id',
  onDelete: "cascade"
});

User.hasMany(Comment, {
  foreignKey: 'blog_id',
  onDelete: "cascade"
});

Blog.hasMany(Comment, {
  foreignKey: 'blog_id',
  onDelete: "cascade"
});



module.exports = {Blog, Comment, User};