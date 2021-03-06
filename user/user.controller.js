import { User } from "../db/models/index.js";
import userStore from "./user.store.js";

const createUser = async ({ username }) => {
    try {
        return await User.create({ username: username });
    } catch (err) {
        throw(err);
    }
};

const getUsers = async () => {
    try {
        return await userStore.getUsers();
    } catch (err) {
        throw(err);
    }
};

const getUser = async ({ id }) => {
    try {
        return await userStore.getUser(id);
    } catch (err) {
        throw(err);
    }
};

const deleteUser = async ({ username }) => {
    try {
        return await userStore.deleteUser(username);
    } catch (err) {
        throw(err);
    }
};

export {
    createUser,
    getUsers,
    getUser,
    deleteUser
};