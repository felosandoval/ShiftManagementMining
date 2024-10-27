const express = require("express");
const {
  getTask,
  getOneTask,
  createTask,
  putTask,
  deleteTask,
} = require("../controllers/tasks.controller.js");
const router = express.Router();

router.get("/task", getTask);
router.get("/task/:id", getOneTask);
router.post("/task", createTask);
router.put("/task/:id", putTask);
router.delete("/task/:id", deleteTask);

module.exports = router;
