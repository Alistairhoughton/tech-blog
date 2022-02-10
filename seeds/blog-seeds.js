const { Blog } = require("../models")

const blogData = [{
        title: 'test1',
        content: 'This is a test of one',
        user_id: 1

    },
    {
        title: 'test2',
        content: 'This is a test of two',
        user_id: 2
    },
    {
        title: 'test3',
        content: 'This is a test of three',
        user_id: 3
    }
];

const blogPosts = () => Blog.bulkCreate(blogData);

module.exports = blogPosts;