import express from "express";

const app = express();

// Parse form data: application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

// Home page
app.get("/", (req, res) => {
  res.send(`
    <form action="/create-user" method="POST">
      <label>Name:</label>
      <input type="text" name="username" />
      <button type="submit">Submit</button>
    </form>
  `);
});

// Handle form submit
app.post("/create-user", (req, res) => {
  const { username } = req.body;
  console.log("Username:", username);

  return res.redirect("/");
});

// Not found (404)
app.use((req, res) => {
  res.status(404).send("<h1>Page Not Found</h1>");
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
