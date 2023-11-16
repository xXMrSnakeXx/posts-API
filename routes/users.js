const express = require("express");

const ctrl = require("../controllers/users");
const { ctrlWrapper } = require("../helpers");
const { auth } = require("../middlewares");



const router = express.Router();

router.post("/signup", ctrlWrapper(ctrl.signup));

router.post("/login", ctrlWrapper(ctrl.login));

router.get("/current", auth, ctrlWrapper(ctrl.current));

router.get("/logout", auth, ctrlWrapper(ctrl.logout));

module.exports = router;
