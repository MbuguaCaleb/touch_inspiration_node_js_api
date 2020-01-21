const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

//init dotenv
dotenv.config();
//connect to DB
mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true },

  () => {
    console.log("connected to DB");
  }
);
//Importing Routes
const userRoutes = require("./routes/user");

//adding middlewares.
app.use(cors());

//enables us to read the request when we post
app.use(bodyParser.json());

//Route Middleware
app.use("/api/one-touch-inspiration/user/", userRoutes);

//Port
const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server is running on PORT:${PORT}`);
});
