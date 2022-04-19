import { Post } from "../db/models/index.js";
import postStore from "./post.store.js";
import userStore from "../user/user.store.js";

const createPost = async ({ userId, title, description }, isTest) => {
    try {
        if (isTest) {
            return postStore.createUser({ userId, title, description });
        } else if (!isTest && await userStore.getUser(userId)) {
            return postStore.createUser({ userId, title, description });
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

const deletePost = async ({ postId }, isTest) => {
    try {
        return await postStore.deletePost(postId, isTest);
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