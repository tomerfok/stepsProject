import { Post } from "./post.model.js";
import { User } from "./user.model.js";
// import { DataTypes, Model } from 'sequelize';
// import { sequelize } from '../db.js';
// 
// class Post extends Model {}
// 
// Post.init({
//   postId: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//     autoIncrement: true,
//     primaryKey: true
//   },
//   title: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     validate: {
//       is: ["[a-z]", 'i'],
//       max: 50
//     }
//   },
//   description: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     validate: {
//       max: 120
//     }
//   },
// }, {
//   sequelize
// });
// 
// class User extends Model {}
// 
// User.init({
//   username: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     validate: {
//       is: ["[a-z]", 'i'],
//       max: 30
//     }
//   }
// }, {
//   sequelize
// });
// 
// import { sequelize } from '../db.js';
// import { Sequelize } from "sequelize";
// 
// const UserPost = sequelize.define('user_post', {
//     role: Sequelize.STRING
// });
// through: UserPost
// foreignKey: 'userId' 
// User.hasMany(Post, { as: "posts" });
Post.belongsTo(User, { as: "user", foreignKey: 'userId' });

export { Post, User };
