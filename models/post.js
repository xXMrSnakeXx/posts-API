const { Schema, model } = require("mongoose");

const Joi = require("joi");

const postSchema = Schema(
  {
    title: {
      type: String,
      
    },
    text: {
      type: String,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { versionKey: false, timestamps: true }
);
const addSchema = Joi.object({
  title: Joi.string().required(),
  text: Joi.string().required(),

});

const Post = model("post", postSchema)

module.exports = {
    Post,
    addSchema
}