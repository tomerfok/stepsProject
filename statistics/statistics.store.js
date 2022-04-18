import { Post, User } from "../db/models/index.js";

const getTopcreators = async (index, limit) => {
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
    })
}

export default {
    getTopcreators
};