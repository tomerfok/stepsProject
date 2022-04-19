import postsRouter from "./posts/post.router.js";
import statsRouter from "./statistics/statistics.router.js";
import userRouter from "./user/user.router.js";
import { sequelize } from "./db/db.js";
import express, { json, urlencoded } from 'express';

const app = express();
const port = process.env.PORT || 8080;

app.use(json());
app.use(urlencoded());

app.use('/posts', postsRouter);
app.use('/statistics', statsRouter);
app.use('/user', userRouter);

await sequelize.sync();

app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
});