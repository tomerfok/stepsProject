import { Post } from "./post.model.js";
import { User } from "./user.model.js";

User.hasMany(Post, { as: "posts" });

export { Post, User };
