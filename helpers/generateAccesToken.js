const jwt = require("jsonwebtoken");
const { SECRET_KEY } = process.env;

const generateAccesToken = (email) => {
  const payload = {
    email,
  };
  return jwt.sign(payload, SECRET_KEY, { expiresIn: "24h" });
};

module.exports = generateAccesToken;
