const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 8080;
const app = express();
app.use(helmet());
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

app.get("/api", (req, res) => {
  res.json({
    message: "hi dat",
  });
});

app.listen(PORT, () => {
  console.log(`Server connect to http://localhost:${PORT}`);
});
