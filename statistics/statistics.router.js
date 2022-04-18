import { Router } from 'express';
const router = Router();
import { getTopcreators, getRuntime } from './statistics.controller.js';

router.get('/topcreators', async (req, res, next) => {
    try {
        res.send(await getTopcreators());
    } catch (err) {
        next(err);
    }
});


router.get('/runtimes', async (req, res, next) => {
    try {
        res.send(await getRuntime());
    } catch (err) {
        next(err);
    }
});

export default router;