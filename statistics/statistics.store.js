import { sequelize } from "../db/db.js";
import { Post, User } from "../db/models/index.js";

const getTopcreators = async () => {
    try {
        return Post.findAll({
            attributes: ['User*', 'Post*', [sequelize.fn('count', 'post.id'), 'postCount']],
            include: [
                {
                    model: User,
                    as: "user"
                }
            ],
            group: ['userId'],
            order: [['postCount', 'DESC']],
            limit: 10
        })
    } catch (err) {
        throw (err);
    }
}

export default {
    getTopcreators
};