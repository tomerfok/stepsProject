import { Post } from "../db/models/index.js";
import postStore from "./post.store.js";
import getUser from "../user/user.store.js";

const createPost = async ({ userId, title, description }) => {
    try {
        if (getUser(userId)) {
            return postStore.createUser({userId, title, description});
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

export {
    createPost,
    getPosts,
    getPostsAmount
};