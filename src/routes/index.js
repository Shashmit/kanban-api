const router = require("express").Router();
const auth = require("./auth");
const board = require("./board");

router.use("/auth", auth);
router.use("/boards", board);
router.use("/boards/:boardId/sections", require("./section"));
router.use("/boards/:boardId/tasks", require("./task"));

module.exports = router;
