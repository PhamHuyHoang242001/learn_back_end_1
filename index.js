import express from "express";
// const mongoose = require("mongoose");
import morgan from "morgan";
import dotenv from "dotenv";

dotenv.config();
const app = express();
// //Connect MongoDB
// mongoose.connect((process.env.MONGODB_URL), { useNewUrlParser: true })
//   .then(() => {
//     console.log('Connected to MongoDB');
//   })
//   .catch((error) => {
//     console.error('Error connecting to MongoDB', error);
//   });

// app.use(bodyParser.json({ limit: "50mb" }));
// app.use(cors());
app.use(morgan("common"));

app.get("/api", (req, res) => {
  res.status(200).json("Hello");
});
app.get("/welcom", (req, res) => {
  res.status(200).json("chào mọi");
});

// //Routes
// app.use("/author", authorRoute);
// app.use("/book", bookRoute);
// app.use("/user", userRoute);
// app.use("/borrow", borrowRoute);

app.listen(8000, () => {
  console.log("Server is running");
});
