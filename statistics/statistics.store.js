import { sequelize } from "../db/db.js";
import { Post, User } from "../db/models/index.js";

const getTopcreators = async () => {
    try {
        return Post.findAll({
            attributes: [[sequelize.fn('count', 'post.id'), 'postCount']],
            include: [
                {
                    model: User,
                    as: "user"                    
                }
            ],
            group: ['userId'],
            limit: 10,
            order: [[sequelize.literal('postCount'), 'DESC']]
        })
    } catch (err) {
        throw (err);
    }
}

export default {
    getTopcreators
};