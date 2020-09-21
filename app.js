require("dotenv").config();
const express = require("express");
const fileUpload = require("express-fileupload");
const path = require("path");
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

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

mongoose.connect(
  process.env.MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
  () => {
    console.log("Successfully connected to database");
  }
);

app.use("/api/user", require("./routes/User"));
app.use("/api/image", require("./routes/FileUpload"));
app.use("/api/card-collections", require("./routes/CardCollection"));

if (process.env.NODE_ENV === "production") {
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/client/build/index.html"));
  });
}

app.listen(PORT, () => {
  console.log("Express server started at port " + PORT);
});
