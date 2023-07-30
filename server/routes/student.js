import express from "express";

import {
  createStudents,
  getStudents,
  getStudent,
  updateStudents,
  deleteStudents,
} from "../controller/student.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("this works!");
});
router.get("/:id", getStudent);
router.post("/", createStudents);
router.put("/:id", updateStudents);
router.delete("/:id", deleteStudents);
export default router;
