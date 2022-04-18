import { Router } from 'express';
const router = Router();
import { createUser, getUsers, getUser } from './user.controller.js';

router.post('/', async (req, res, next) => {
    try {
        const username = await createUser(req.body);
        res.send({ message: "User created succefully", username });
    } catch (err) {
        next(err);
    }
});

router.get('/all', async (req, res, next) => {
    try {
        const users = await getUsers();
        res.send({ message: "All of the Users returned succefully", users });
    } catch (err) {
        next(err);
    }
});

router.get('/', async (req, res, next) => {
    try {
        const user = await getUser(req.query);
        res.send({ message: "User returned succefully", user })
    } catch (err) {
        next(err);
    }
});

export default router;