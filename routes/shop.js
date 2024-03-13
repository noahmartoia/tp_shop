import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.render("shop", {title:'shop', js:'<script src="js/shop.js"></script>'});
});

export default router;
