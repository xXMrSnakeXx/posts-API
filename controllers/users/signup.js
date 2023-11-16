const bcrypt = require("bcryptjs");

const { User, joiSignUpSchema } = require("../../models");

const { createError, generateAccesToken } = require("../../helpers");

const signup = async (req, res) => {
  const { error } = joiSignUpSchema.validate(req.body);
  if (error) {
    throw createError(400, error.message);
  }

  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw createError(409, "Email in use");
  }
  const token = generateAccesToken(email);
  const hashPassword = await bcrypt.hash(password, 10);

  const result = await User.create({
    ...req.body,
    password: hashPassword,
    token,
  });

  res.status(201).json({
    user: {
      email: result.email,
      username: result.username,
      token: result.token,
    },
  });
};

module.exports = signup;
