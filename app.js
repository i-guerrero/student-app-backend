// App.js
// Define the route handlers
const express = require("express");
const studentData = require("./studentData.json");

// Create and instance of an Express application
const app = express();

// Define our routes

// Healthcheck route
// GET / method = GET path = /
app.get("/", (req, res) => {
  res.status(200).json({ data: "Service is running!" });
});

app.get("/students", (req, res) => {
  try {
    const { students } = studentData;
    // students.split(" ");
    res.status(200).json({ data: students });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/students/:id", (req, res) => {
  try {
    const { id } = req.params;
    console.log(id, typeof id);
    const { students } = studentData;
    const student = students.find((student) => student.id === id);
    if (student) {
      res.status(200).json({ data: student });
    } else {
      res.status(404).json({ error: `No student with id of ${id}` });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = app;
