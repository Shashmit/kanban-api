const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const app = express();
const port = process.env.PORT || 4000;
const routes = require("./src/routes");


dotenv.config();
app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use("/api", routes);

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
