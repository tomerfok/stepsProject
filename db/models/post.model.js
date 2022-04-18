import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../db.js';
import { User } from './user.model.js'

class Post extends Model {}

Post.init({
  postId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      is: ["[a-z]", 'i'],
      max: 50
    }
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      max: 120
    }
  },
}, {
  sequelize
});

export { Post };