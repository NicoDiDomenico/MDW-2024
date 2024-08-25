import { Router } from "express"; /* no entendi esto { Router } */
import usersRouter from "./users.route.js";
import productsRouter from "./products.route.js";

const router = Router();

router.use('/users', usersRouter);
router.use(productsRouter);

export default router;
