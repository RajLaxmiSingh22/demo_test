import { Router } from "express";

const st = Router();

// Dummy data
const students = [
  { id: 1, name: "Aman" },
  { id: 2, name: "Riya" },
  { id: 3, name: "Karan" },
];

const courses = [
  { id: 1, title: "Node.js" },
  { id: 2, title: "Express.js" },
  { id: 3, title: "MongoDB" },
];

// ✅ Home Route
st.get("/", (req, res) => {
  res.send("Welcome to the Student & Course API!");
});

// ✅ Student Routes
st.get("/students", (req, res) => {
  res.json(students);
});

st.get("/students/:id", (req, res) => {
  const id = Number(req.params.id);
  const student = students.find((s) => s.id === id);

  if (!student) return res.status(404).send("Student not found");
  res.json(student);
});

// ✅ Course Routes
st.get("/courses", (req, res) => {
  res.json(courses);
});

st.get("/courses/:id", (req, res) => {
  const id = Number(req.params.id);
  const course = courses.find((c) => c.id === id);

  if (!course) return res.status(404).send("Course not found");
  res.json(course);
});

export default st;
