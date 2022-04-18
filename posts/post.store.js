import { Post, User } from "../db/models/index.js";

const createUser = async ({ userId, title, description }) => {
    try {
        await Post.create({ userId, title, description });
        return { userId, title, description };
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

export default {
    createUser,
    findAmount,
    getPosts
};