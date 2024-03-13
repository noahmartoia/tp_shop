import Express from "express";
import shopRouter from "./routes/shop.js";
import authRouter from "./routes/auth.js";
import expressEjsLayouts from "express-ejs-layouts";

const app = Express();

// Configure mon application pour qu'elle utlise ejs comme moteur de templating
// l'outil qui va generer de l'html
app.set('layout', '../views/layout')
app.set('view engine', 'ejs')
app.use(expressEjsLayouts)

app.use(Express.static("public"));

app.use("/", (req, res, next) => {
  next();
});

app.get("/", (req, res) => {
  res.render("home", {title:"home page",js:''});
});

app.use("/shop", shopRouter);
app.use("/auth", authRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
