const { Post, addSchema } = require("../../models");
const { createError } = require("../../helpers");

const updatePost = async (req, res) => {
    console.log("update");
  const { error } = addSchema.validate(req.body);
  if (error) {
    throw createError(400, (error.message = "missing fields"));
  }
  const { postId } = req.params;
  const result = await Post.findByIdAndUpdate(postId, req.body, {
    new: true,
  });
  if (!result) {
    throw createError(404);
  }
  res.json(result);
};

module.exports = updatePost;
