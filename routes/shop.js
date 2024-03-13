import express from "express";
import connections from "../database.js";

let shop;
const router = express.Router();

connections.query(
  'SELECT * FROM produit',
  function (err, results, fields) {
    shop = results;
    
    router.get("/", (req, res) => {
      res.render("shop", {title:'shop', js:'<script src="js/shop.js"></script>', valeur:shop});
    });
});

export default router;
