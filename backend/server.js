import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import productsRoutes from "./routes/productsRoutes.js";
import colors from "colors";
dotenv.config();
connectDB();
const app = express();

app.get("/", (req, res) => {
  res.send("welcome from backend");
});

app.use("/api/products", productsRoutes);

app.use(notFound);

app.use(errorHandler);

const port = process.env.PORT || 5000;
app.listen(
  port,
  console.log(
    `server running in ${process.env.NODE_ENV}  on ${port}`.yellow.bold
  )
);
