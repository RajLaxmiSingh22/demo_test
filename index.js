import express from "express";
import routes from "./routes.js";
import st from "./st.js";

const app = express();

// Body parsers
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// ✅ Logging middleware (global)
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// ✅ Use routes
// app.use( routes);
app.use("/", routes);
app.use("/api", st);

// ✅ 404 (must be last)
app.use("*", (req, res) => {
  res.status(404).send("<h1>404 - Page Not Found</h1>");
});

app.listen(4000, () => {
  console.log("Server is listening on port 4000");
});
