import { Router } from 'express';
const router = Router();
import { getTopcreators, getRuntime } from './statistics.controller.js';

router.get('/topcreators', async (req, res, next) => {
    try {
        const topCreators = await getTopcreators();
        res.send({ message: "The top 10 creators of posts by order are: " + topCreators });
    } catch (err) {
        next(err);
    }
});


router.get('/runtimes', async (req, res, next) => {
    try {
        const { createTime, getPostsTime } = await getRuntime();
        res.send({ message: "The time to create a post is: " + createTime + " milliseconds, and the time to get a chunk of posts is: " + getPostsTime + " milliseconds."});
    } catch (err) {
        next(err);
    }
});

export default router;