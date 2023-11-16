const bcrypt = require("bcryptjs");

const { User, joiSignInSchema } = require("../../models");

const { createError, generateAccesToken } = require("../../helpers");

const login = async (req, res) => {
  const { error } = joiSignInSchema.validate(req.body);
  if (error) {
    throw createError(400, error.message);
  }
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    throw createError(401, "Email or password is wrong");
  }

  const comparePassword = await bcrypt.compare(password, user.password);
  if (!comparePassword) {
    throw createError(401, "Email or password is wrong");
  }

  const token = generateAccesToken(user.email);
  await User.findByIdAndUpdate(user._id, { token });
  res.json({
    user: {
      email: user.email,
      username: user.username,
      token,
    },
  });
};

module.exports = login;
