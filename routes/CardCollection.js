const express = require("express");
const passport = require("passport");
const fs = require("fs");
const path = require("path");

const router = express.Router();

const passportConfig = require("../passport");
const CardCollection = require("../models/CardCollection");
const CardImage = require("../models/CardImage");

// add to collection
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const { image_id } = req.body;
      const image = await CardImage.findById({ _id: image_id });

      const collection = new CardCollection({
        image: image,
        created_by: req.user,
      });

      collection.save((err, document) => {
        if (err) {
          res.status(500).json({
            message: { msgBody: "Error has occurred", msgError: true },
          });
        } else {
          res.status(200).json(document);
        }
      });
    } catch (error) {}
  }
);

router.get("/", async (req, res) => {
  try {
    const collections = await CardCollection.find({})
      .populate("created_by", "username role")
      .populate("image", "file_path original_name")
      .exec();
    res.status(200).json(collections);
  } catch (error) {
    res.status(500).json({
      message: { msgBody: "Error has occurred", msgError: true },
    });
  }
});

module.exports = router;
