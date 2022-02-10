const { User } = require('../models');

const userData = [{
        username: 'userone',
        password: 'userone'

    },
    {
        username: 'usertwo',
        password: 'usertwo'
    },
    {
        username: 'userthree',
        password: 'userthree'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;