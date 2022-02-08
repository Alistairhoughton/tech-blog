const Blog = require("./Blog");
const Blog = require("./User");
const Blog = require("./Comment");

User.hasMany(Post, {
    foreignKey: 'user_id'
});

//I think I need more. 

module.exports = {Blog, Comment, User};