import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.render("auth", {title:'auth',js:''});
});

export default router;
