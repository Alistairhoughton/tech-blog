const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const bcrypt = require('bcrypt');

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull:false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        
        len: [6]
    }
    }
},
{
    hooks: {
        async beforeCreate(UserData) {
            const validPassword = await bcrypt.hash(userData.password, 10)
            return userData;
        },
        
        //do we need an update PW function? 

        
    }
},
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "blog",
  }
);

module.exports = User;

