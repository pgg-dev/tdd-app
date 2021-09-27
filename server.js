const express = require("express");
require("dotenv").config();

const PORT = 5000;

const app = express();
const productRoutes = require("./routes");
const mongoose = require("mongoose");

const { MONGO_ID, MONGO_PASSWORD } = process.env;
const MONGO_URL = `mongodb://${MONGO_ID}:${MONGO_PASSWORD}@localhost:27017/admin`;

mongoose.connect(
  MONGO_URL,
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (error) => {
    if (error) {
      console.log("mongo error", error);
    } else {
      console.log("mongo succes");
    }
  }
);

app.use("/api/products", productRoutes);
app.get("/", (req, res) => res.send("root"));

app.listen(PORT, () => console.log("running"));
