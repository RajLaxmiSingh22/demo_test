import { Router } from "express";

const router = Router();

// ✅ Middleware for only these routes (optional)
// If you want logging globally, keep it in server.js instead.
const addUserMiddleware = (req, res, next) => {
  req.user = "Guest";
  next();
};

router.get("/welcome/:username", addUserMiddleware, (req, res) => {
  const username = req.params.username;

  // ✅ query param with default
  const { role = "Admin" } = req.query;

  res.send(`<h1>Welcome, ${username} your role is ${role}!</h1>`);
});

// Home page
router.get("/", (req, res) => {
  res.send(`
    <form action="/create-user" method="POST">
      <label>Name:</label>
      <input type="text" name="username" />
      <button type="submit">Submit</button>
    </form>
  `);
});

// Orders
router.get("/orders", (req, res) => res.send("Here is the list of all orders."));
router.post("/orders", (req, res) => res.send("A new order has been created."));

// Users
router.get("/users", (req, res) => res.send("Here is the list of all users."));
router.post("/users", (req, res) => res.send("A new user has been added."));

// Products
router.get("/products", (req, res) => res.send("Here is the list of all products."));
router.post("/products", (req, res) => res.send("A new product has been added."));

// Categories
router.get("/categories", (req, res) => res.send("Here is the list of all categories."));
router.post("/categories", (req, res) => res.send("A new category has been created."));

// Form submit
router.post("/create-user", (req, res) => {
  const { username } = req.body;
  console.log("Username:", username);
  return res.redirect("/");
});

export default router;
