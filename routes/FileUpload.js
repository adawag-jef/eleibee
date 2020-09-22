const express = require("express");
const passport = require("passport");
const fs = require("fs");
const path = require("path");

const router = express.Router();

const passportConfig = require("../passport");
const CardImage = require("../models/CardImage");

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    CardImage.find({})
      .populate("user", "username role")
      .exec((err, images) => {
        if (err) {
          res.status(500).json({
            message: { msgBody: "Error has occurred", msgError: true },
          });
        } else {
          res.status(200).json(images);
        }
      });
  }
);

router.post(
  "/upload",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send("No files were uploaded.");
    }

    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    let sampleFile = req.files.sampleFile;
    let fileName =
      sampleFile.name.split(".")[0] +
      "_" +
      Date.now() +
      "." +
      sampleFile.name.split(".")[1];

    // Use the mv() method to place the file somewhere on your server
    const fileStoragePath = path.join(
      __dirname,
      "..",
      process.env.UPLOAD_DIR,
      fileName
    );
    const filePath = `uploads/${fileName}`;

    sampleFile.mv(fileStoragePath, function (err) {
      if (err) return res.status(500).send(err);
      const card_image = new CardImage({
        file_name: fileName,
        file_path: filePath,
        original_name: sampleFile.name,
        user: req.user,
      });
      card_image.save((err) => {
        if (err) {
          res.status(500).json({
            message: { msgBody: "Error has occurred", msgError: true },
          });
        } else {
          res.status(200).json({
            fileName,
            filePath,
          });
        }
      });
    });
  }
);

router.delete("/:img_id", (req, res) => {
  const { img_id } = req.params;
  CardImage.findById({ _id: img_id }, (err, image) => {
    if (err) {
      return res
        .status(500)
        .json({ message: { msgBody: "Error has occurred", msgError: true } });
    }
    if (image) {
      const fileStoragePath = path.join(
        __dirname,
        "..",
        process.env.UPLOAD_DIR,
        image.file_name
      );

      fs.unlink(fileStoragePath, (err) => {
        if (err) console.log(err);
        else {
          CardImage.findOneAndDelete({ _id: img_id }, (err) => {
            if (err) console.log(err);
            res.status(200).json({
              message: { msgBody: "Successfully Deleted", msgError: false },
            });
          });
        }
      });
    } else {
      return res
        .status(404)
        .json({ message: { msgBody: "Image not found", msgError: true } });
    }
  });
});

module.exports = router;
