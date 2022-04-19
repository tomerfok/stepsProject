import { Post } from "../db/models/index.js";
import postStore from "./post.store.js";
import userStore from "../user/user.store.js";

const createPost = async ({ userId, title, description }) => {
    try {
        if (await userStore.getUser(userId)) {
            return await postStore.createPost({ userId, title, description });
        } else {
            throw new Error("User whom supposedly created the post, doesn't exist!");
        }
    } catch (err) {
        throw (err);
    }
};

const getPosts = async (index, limit) => {
    try {
        return await postStore.getPosts(index, limit);
    } catch (err) {
        throw (err);
    }
};

const getPostsAmount = async () => {
    try {
        return await postStore.findAmount();
    } catch (err) {
        throw (err);
    }
};

const deletePost = async ({ postId }) => {
    try {
        return await postStore.deletePost(postId);
    } catch (err) {
        throw (err);
    }
};

export {
    createPost,
    getPosts,
    getPostsAmount,
    deletePost
};