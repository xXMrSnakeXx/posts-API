const { Post } = require("../../models")

const listPosts = async (req, res) => {
    const { id: owner } = req.user;
    const result = await Post.find({ owner })
    res.json(result)
}

module.exports =listPosts