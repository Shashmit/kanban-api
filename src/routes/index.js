const router = require("express").Router();
const auth = require("./auth");
const board = require("./board");
const section = require("./section");
const task = require("./task");

router.use("/auth", auth);
router.use("/boards", board);
router.use("/boards/:boardId/sections", section);
router.use("/boards/:boardId/tasks", task);

module.exports = router;
