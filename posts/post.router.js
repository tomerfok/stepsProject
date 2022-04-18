import { Router } from 'express';
const router = Router();
import { createPost, getPosts, getPostsAmount } from './post.controller.js';

router.post('/', async (req, res, next) => {
    try {
        const post = await createPost(req.body);
        res.send({ message: "Post created succefully", post });
    } catch (err) {
        next(err);
    }
});

router.get('/', async (req, res, next) => {
    try {
        const { index, limit } = req.query;
        const posts = await getPosts(+index, +limit);
        res.send({ message: "Posts " + (index + 1) + " to " + (index + limit), posts });
    } catch (err) {
        next(err);
    }
});

router.get('/postsnumber', async (req, res, next) => {
    try {
        const postsAmount = await getPostsAmount();
        res.send({ message: "Amount of posts " + postsAmount});
    } catch (err) {
        next(err);
    }
});

export default router;