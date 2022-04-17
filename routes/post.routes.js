const express = require('express');
const router = express.Router();
const postController = require('../controllers/post.controller.js');

router.post('/posts', postController.createPost);
router.get('/posts', postController.postsList);
router.get('/postsnumber', postController.postsAmount);

////////////////////////////////////////////////////////////////////////////

router.get('/statistics/topcreators', postController.);
router.get('/statistics/runtimes', postController.);

module.exports = router;