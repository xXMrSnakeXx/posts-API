const { User, joiSignInSchema, joiSignUpSchema } = require("./user");
const {Post, addSchema} = require("./post")
module.exports = {
  User,
  Post,
  addSchema,
  joiSignInSchema,
  joiSignUpSchema,
};
