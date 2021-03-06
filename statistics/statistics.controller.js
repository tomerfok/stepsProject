import { performance } from "perf_hooks";
import { createPost, getPosts, deletePost } from "../posts/post.controller.js";
import { createUser, deleteUser } from "../user/user.controller.js";
import statisticsStore from "./statistics.store.js";

const getTopcreators = async () => {
    try {
        let topCreators = await statisticsStore.getTopcreators();
        return topCreators.map(creator => creator.user.username).toString();
    } catch (err) {
        throw (err);
    }
};

const getRuntime = async () => {
    try {
        let testUser = await createUser({ username: "tester" });

        let createStartTime = performance.now();
        let testPost = await createPost({ userId: testUser.id, title: "testToDelete", description: "testToDelete" }, true);
        let createEndTime = performance.now();

        const createTime = (createEndTime - createStartTime);

        testPost = await deletePost({postId: testPost.postId});
        testUser = await deleteUser({ username: testUser.username });

        let getPostsStartTime = performance.now();
        const posts = await getPosts(0, 2);
        let getPostsEndTime = performance.now();

        const getPostsTime = (getPostsEndTime - getPostsStartTime);

        return { createTime, getPostsTime };
    } catch (err) {
        throw (err);
    }
};

export {
    getTopcreators,
    getRuntime
};