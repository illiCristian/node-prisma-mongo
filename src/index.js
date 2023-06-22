import express from "express";
import productsRoutes from "./routes/products.routes.js";
import categoriesRoutes from "./routes/categories.routes.js";
const app = express();

app.listen(3000, () => {
  console.log("listening on port 3000 http://localhost:3000");
});

app.use("/api/products", productsRoutes);
app.use("/api/categories", categoriesRoutes);
