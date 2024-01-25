const { Post, addSchema } = require("../../models");
const { createError } = require("../../helpers");

const addPost = async (req, res) => {
  const { error } = addSchema.validate(req.body);
  if (error) {
    throw createError(400, (error.message = "missing required name field"));
  }
  const { id: owner } = req.user;
  const result = await Post.create({ ...req.body, owner });
  res.status(201).json(result);
};

module.exports = addPost;
