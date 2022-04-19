import { Post } from "./post.model.js";
import { User } from "./user.model.js";

Post.belongsTo(User, { as: "user", foreignKey: 'userId' });

export { Post, User };
