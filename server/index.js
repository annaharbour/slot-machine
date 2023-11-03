const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
require("dotenv").config();
const authRoute = require("./routes/AuthRoute");
const JackpotRoute = require('./routes/JackpotRoute')
const Balance = require('./routes/Balance')
// const { MONGO_URL, PORT } = process.env;
const allowedOrigins = ['https://spooky-slot-machine.onrender.com', 'https://slot-machine.onrender.com', 'http://localhost:3000'];

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB is  connected successfully"))
  .catch((err) => console.error(err));

// app.listen(PORT, () => {
app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT}`);
});

// app.use(
//   cors({
//     // origin: ["http://localhost:3000"],
//     origin: ["https://spooky-slot-machine.onrender.com"],
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     credentials: true,
//   })
// );

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));

app.use(cookieParser());

app.use(express.json());

app.use("/", authRoute, JackpotRoute, Balance);
