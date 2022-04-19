import { performance } from "perf_hooks";
import { createPost, getPosts, deletePost } from "../posts/post.controller.js";
import statisticsStore from "./statistics.store.js";

const getTopcreators = async () => {
    try {
        let topCreators = await statisticsStore.getTopcreators();
        return topCreators.map(creator => creator.username).toString();
    } catch (err) {
        throw (err);
    }
};

const getRuntime = async () => {
    try {
        let createStartTime = performance.now();
        const post = createPost({ userId: 1, title: "testToDelete", description: "testToDelete" });
        let createEndTime = performance.now();

        await deletePost({ postId: 0, isTest: true});

        let getPostsStartTime = performance.now();
        const posts = await getPosts(0, 2);
        let getPostsEndTime = performance.now();

        return { createtime: createEndTime - createStartTime, getPostsTime: getPostsEndTime - getPostsStartTime };
    } catch (err) {
        throw (err);
    }
};

export {
    getTopcreators,
    getRuntime
};