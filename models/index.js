const Blog = require("./Blog");
const User = require("./User");
const Comment = require("./Comment");

User.hasMany(Blog, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
  });

Blog.belongsTo(User,{
  foreignKey: 'userId',
  onDelete: 'CASCADE'
})

//I think I need more?

module.exports = {Blog, Comment, User};