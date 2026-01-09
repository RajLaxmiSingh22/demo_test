import { Router } from "express";
import userRoutes from "./user.routes.js";
import orderRoutes from "./order.routes.js";
import shopRoutes from "./shop.routes.js";

const router = Router();

router.use(userRoutes);
router.use(orderRoutes);
router.use(shopRoutes);

export default router;
