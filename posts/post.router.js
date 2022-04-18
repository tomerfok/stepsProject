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
        res.send(await getPosts(index, limit));
    } catch (err) {
        next(err);
    }
});

router.get('/postsnumber', async (req, res, next) => {
    try {
        res.send(await getPostsAmount());
    } catch (err) {
        next(err);
    }
});

export default router;