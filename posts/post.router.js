import { Router } from 'express';
const router = Router();
import { createPost, getPosts, getPostsAmount, deletePost } from './post.controller.js';

router.post('/', async (req, res, next) => {
    try {
        const post = await createPost(req.body, false);
        res.send({ message: "Post created succefully", post });
    } catch (err) {
        next(err);
    }
});

router.get('/', async (req, res, next) => {
    try {
        const { index, limit } = req.query;
        const posts = await getPosts(+index, +limit);
        res.send({ message: "Posts " + (index + 1) + " to " + (posts.length), posts });
    } catch (err) {
        next(err);
    }
});

router.get('/postsnumber', async (req, res, next) => {
    try {
        const postsAmount = await getPostsAmount();
        res.send({ message: "Amount of posts: " + postsAmount });
    } catch (err) {
        next(err);
    }
});

router.delete('/', async (req, res, next) => {
    try {
        const post = await deletePost(req.query, false);
        res.send({ message: "Post deleted succefully" });
    } catch (err) {
        next(err);
    }
});

export default router;