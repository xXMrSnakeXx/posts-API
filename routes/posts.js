const express = require("express");

const ctrl = require("../controllers/posts");
const { ctrlWrapper } = require("../helpers");
const { auth } = require("../middlewares");

const router = express.Router();

router.get("/", auth, ctrlWrapper(ctrl.listPosts));

router.post("/", auth, ctrlWrapper(ctrl.addPost));
router.put("/:postId", auth, ctrlWrapper(ctrl.updatePost));

router.delete("/:postId", auth, ctrlWrapper(ctrl.removePost));

module.exports = router;
