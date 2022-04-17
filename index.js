const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const routes = require('./routes/post.routes.js');

app.use(express.json());
app.use('/api', routes);

app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
});