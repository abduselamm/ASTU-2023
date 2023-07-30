import express from "express";
import mongoose from "mongoose";

import Student from "../model/studentModel.js";

const router = express.Router();

export const createStudents = async (req, res) => {
  const { name, quote, photos, Department, School } = req.body;
  const newStudent = new Student({
    name,
    quote,
    photos,
    Department,
    School,
  });

  try {
    await newStudent.save();

    res.status(201).json(newStudent);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
export const getStudents = async (req, res) => {
  try {
    const students = await Student.find();

    res.status(200).json(students);
  } catch (error) {
    console.log("I am not working");
    res.status(404).json({ message: error.message });
  }
};
export const getStudent = async (req, res) => {
  const { id } = req.params;

  try {
    const student = await Student.findById(id);
    res.status(200).json(student);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const updateStudents = async (req, res) => {};
export const deleteStudents = async (req, res) => {};
