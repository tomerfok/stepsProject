import { Post } from "./post.model.js";
import { User } from "./user.model.js";
// import { sequelize } from '../db.js';
// import { Sequelize } from "sequelize";

// const UserPost = sequelize.define('user_post', {
//     role: Sequelize.STRING
// });
// through: UserPost
User.belongsToMany(Post, { as: "posts", foreignKey: 'userId' });
Post.belongsToMany(User, { as: "user", foreignKey: 'userId' });

export { Post, User };
