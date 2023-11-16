const current = async (req, res) => {
  const { email , username} = req.user;
  res.json({
    email,
    username,
  });
};

module.exports = current;
