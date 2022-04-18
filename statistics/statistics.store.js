import { sequelize } from "../db/db.js";
import { Post, User } from "../db/models/index.js";

const getTopcreators = async () => {
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
}

export default {
    getTopcreators
};