import express from "express";
import shopControllers from "../controllers/shopControllers.js";

const router = express.Router();

  router.get("/", shopControllers.getProducts());

export default router;
