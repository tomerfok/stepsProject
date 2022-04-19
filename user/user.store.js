import { User } from "../db/models/index.js";

const createUser = async ({ username }) => {
    try {
        await User.create({ username });
        return username;
    } catch (err) {
        throw (err);
    }
};

const getUsers = async () => {
    try {
        return await User.findAll({});
    } catch (err) {
        throw(err);
    }
}

const getUser = async (id) => {
    try {
        return await User.findOne({
            where: {
                id: id
            }
        });
    } catch (err) {
        throw(err);
    }
}

const deleteUser = async (username) => {
    try {
        return User.destroy({
            where: {
                username
            }
        });
    } catch (err) {
        throw(err);
    }
};

export default {
    createUser,
    getUsers,
    getUser,
    deleteUser
};