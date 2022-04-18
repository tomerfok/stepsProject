import { Post } from "../db/models/index.js";
import postStore from "./post.store.js";

const createPost = async ({ userId, title, description }) => {
    await Post.create({ userId, title, description });
    return { userId, title, description };
};

const getPosts = async (index, limit) => {
    return { message: "Posts " + (index + 1) + " to " + (index + limit), posts: postStore.getPosts(index, limit) };
};

const getPostsAmount = async () => {
    return { message: "Amount of posts " + postStore.findAmount() };
};

export {
    createPost,
    getPosts,
    getPostsAmount
};