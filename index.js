import express from "express";
import routes from "./routes/index.routes.js";

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// global logging
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.use(routes);

// 404
app.use("*", (req, res) => {
  res.status(404).send("<h1>404 - Page Not Found</h1>");
});

app.listen(4000, () => console.log("Server running on port 4000"));
