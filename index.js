const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const app = express();
const port = 7000;
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use("/images", express.static(path.resolve(__dirname, "images")));
app.use(require("./routes/index"));

app.use(express.static(path.resolve(__dirname, 'client', 'build')))
app.get('*', (req,res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
})

const connect = async () => {
  await mongoose.connect(
    "mongodb+srv://tamerlan:raduev@cluster0.14x5g.mongodb.net/TravelAgency"
  );
  console.log("Соединение успешно установлено");

  app.listen(port, () => {
    console.log(`Server has been started on port http://localhost:${port}`);
  });
};

connect();
