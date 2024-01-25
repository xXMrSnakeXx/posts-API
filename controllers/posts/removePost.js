const { Post } = require("../../models");
const { createError } = require("../../helpers");

const removePost = async (req, res) => {
  const { postId } = req.params;

  const result = await Post.findByIdAndRemove(postId);

  if (!result) {
    throw createError(404);
  }
  res.json({
    result,
    message: "post deleted",
  });
};

module.exports = removePost;
