import { Post, User } from "../db/models/index.js";

const getPosts = async (index, limit) => {
    return Post.findAll({
        include: [
            {
                model: User,
                as: "user",
                where: { userId }
            }
        ],
        offset: index * limit,
        limit
    });
}

const findAmount = async () => {
    return Post.count();
};

export default {
    findAmount,
    getPosts
};