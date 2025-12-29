const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
import cors from "cors";

app.use(cors());

// MongoDB connection
mongoose.connect("mongodb+srv://root:Password%40123@cluster0.9qlu1ki.mongodb.net/taskDB?retryWrites=true&w=majority")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log("DB Error:", err));

// Task Schema
const taskSchema = new mongoose.Schema({
  title: String,
  description: String,
  date: { type: Date, default: Date.now }
});

const Task = mongoose.model("Task", taskSchema);

// Routes
app.get("/tasks", async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

app.post("/add-task", async (req, res) => {
  const task = new Task(req.body);
  await task.save();
  res.json({ message: "Task added", task });
});

app.put("/update-task/:id", async (req, res) => {
  await Task.findByIdAndUpdate(req.params.id, req.body);
  res.json({ message: "Task updated" });
});

app.delete("/delete-task/:id", async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Task deleted" });
});

app.listen(5000, () => console.log("Server running on port 5000"));
