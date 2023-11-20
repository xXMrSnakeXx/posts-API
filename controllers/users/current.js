const current = async (req, res) => {
  const { email, username } = req.user;
  res.status(201).json({
    user: {
      email,
      username,
    },
  });
};

module.exports = current;
