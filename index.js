import express from "express";

const app = express();

// Parse form data: application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));


const addUserMiddleware  = ((req, res, next) => {
  req.user = "Guest";
  next();
})
app.get("/welcome/:username", addUserMiddleware, (req, res) => {
    req.user = req.params.username;
    const { role = "Admin"}  = req.query.role ;
  // res.send(`<h1>Welcome, ${req.user}!</h1>`);
  // Welcome Julian, your role is Admin
    res.send(`<h1>Welcome, ${req.user} your role is ${role}!</h1>`);

});
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


// GET /orders - Respond with "Here is the list of all orders."
app.get("/orders", (req, res) => {
  res.send("Here is the list of all orders.");
});


// POST /orders - Respond with "A new order has been created."
app.post("/orders", (req, res) => {
  res.send("A new order has been created.");
})

// GET /users - Respond with "Here is the list of all users."
app.get("/users", (req, res) => {
  res.send("Here is the list of all users.");
})

// POST /users - Respond with "A new user has been added."
app.post("/users", (req, res) => {
  res.send("A new user has been added.");
})

// POST /products - Respond with "A new product has been added."
app.post("/products", (req, res) => {
  res.send("A new product has been added.");
})


// POST /categories - Respond with "A new category has been created."
app.post("/categories", (req, res) => {
  res.send("A new category has been created.");
})

// GET /categories - Respond with "Here is the list of all categories."
app.get("/categories", (req, res) => {
  res.send("Here is the list of all categories.");
})

// GET /products - Respond with "Here is the list of all products."
app.get("/products", (req, res) => {
  res.send("Here is the list of all products.");
})

// Handle form submit
app.post("/create-user", (req, res) => {
  const { username } = req.body;
  console.log("Username:", username);

  return res.redirect("/");
});

// Not found (404)
app.use("*", (req, res) => {
  res.status(404).send("<h1>404 - Page Not Found</h1>");
});

app.listen(4000, () => {
  console.log("Server is listening on port 3000");
});
