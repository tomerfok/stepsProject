import { Post, User } from "../db/models/index.js";

const createPost = async ({ userId, title, description }) => {
    try {
        return await Post.create({ userId, title, description });;
    } catch (err) {
        throw (err);
    }
}

const getPosts = async (index, limit) => {
    try {
        return Post.findAll({
            include: [
                {
                    model: User,
                    as: "user"
                }
            ],
            offset: index * limit,
            limit
        });
    } catch (err) {
        throw (err);
    }
}

const findAmount = async () => {
    try {
        return Post.count();
    } catch (err) {
        throw (err);
    }
};
const deletePost = async (postId) => {
    try {
        return Post.destroy({
            where: {
                postId
            }
        });
    } catch (err) {
        throw (err);
    }
};
export default {
    createPost,
    findAmount,
    getPosts,
    deletePost
};