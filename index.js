const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");
const authorRoute = require("./routes/author");
const bookRoute = require("./routes/book");
const userRoute = require("./routes/user");
const borrowRoute = require("./routes/borrow");

dotenv.config();

//Connect MongoDB
mongoose.connect((process.env.MONGODB_URL), { useNewUrlParser: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB', error);
  });

app.use(bodyParser.json({limit:"50mb"}));
app.use(cors());
app.use(morgan("common"));

app.get("/api", (req, res) => {
    res.status(200).json("Hello");
})

//Routes
app.use("/author", authorRoute);
app.use("/book", bookRoute);
app.use("/user", userRoute);
app.use("/borrow", borrowRoute);

app.listen(8000, () => {
    console.log("Server is running")
});