const Blog = require("./Blog");
const User = require("./User");
const Comment = require("./Comment");

User.hasMany(Blog, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

User.hasMany(Comment, {
  foreignKey: "user_id",
  onDelete: "cascade",
});

Blog.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Blog.hasMany(Comment, {
  foreignKey: "blog_id",
  onDelete: "cascade",
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "cascade",
});

Comment.belongsTo(Blog, {
  foreignKey: "blog_id",
  onDelete: "cascade",
});

module.exports = { Blog, Comment, User };
