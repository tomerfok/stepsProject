import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../db.js';
import { Post } from './post.model.js';

class User extends Model {}

User.init({
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      is: ["[a-z]", 'i'],
      max: 30
    }
  }
}, {
  sequelize
});


export { User };