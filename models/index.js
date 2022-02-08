const Blog = require("./Blog");
const Blog = require("./User");
const Blog = require("./Comment");

User.hasMany(Blog, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
  });

//I think I need more?

module.exports = {Blog, Comment, User};