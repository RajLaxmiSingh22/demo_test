import { Router } from "express";
import {
  getProducts, addProduct,
  getBooks, addBook,
  getCategories, addCategory
} from "../controllers/shop.controller.js";

const router = Router();

router.get("/products", getProducts);
router.post("/products", addProduct);

router.get("/books", getBooks);
router.post("/books", addBook);

router.get("/categories", getCategories);
router.post("/categories", addCategory);

export default router;
