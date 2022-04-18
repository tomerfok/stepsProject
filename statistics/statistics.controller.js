import { performance } from "perf_hooks";
import { createPost, getPosts } from "../posts/post.controller.js";
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
        createPost({ userId: 1, title: "test", description: "test" });
        let createEndTime = performance.now();

        let getPostsStartTime = performance.now();
        getPosts(0, 2);
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