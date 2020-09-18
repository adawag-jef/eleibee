require("dotenv").config();
const express = require("express");
const fileUpload = require("express-fileupload");
const app = express();

const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 5000;

app.use(cookieParser());
app.use(express.json());
app.use(
  fileUpload({
    createParentPath: true,
    safeFileNames: true,
    preserveExtension: true,
  })
);

mongoose.connect(
  process.env.MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Successfully connected to database");
  }
);
app.use("/user", require("./routes/User"));
app.use("/image", require("./routes/FileUpload"));

app.listen(PORT, () => {
  console.log("Express server started at port " + PORT);
});
