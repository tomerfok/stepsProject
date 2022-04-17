const createPost = (req, res, next) => {
    res.json({message: "POST new post"});
};

const postsList = (req, res, next) => {
    res.json({message: "POST new post"});
};

const postsAmount = (req, res, next) => {
    res.json({message: "POST new post"});
};

module.exports = {
    createPost,
    postsList,
    postsAmount
};