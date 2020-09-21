const express = require("express");
const passport = require("passport");

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
      const { image_id, price } = req.body;
      const image = await CardImage.findById({ _id: image_id });

      const collection = new CardCollection({
        image: image,
        price: price,
        created_by: req.user,
      });

      collection.save((err) => {
        if (err) {
          res.status(500).json({
            message: { msgBody: "Error has occurred", msgError: true },
          });
        } else {
          res.status(201).json({
            message: {
              msgBody: "Collection successfully added",
              msgError: false,
            },
          });
        }
      });
    } catch (error) {
      res.status(500).json({
        message: { msgBody: "Error has occurred", msgError: true },
      });
    }
  }
);

// get collections
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

router.delete("/:img_id", async (req, res) => {
  try {
    const { img_id } = req.params;
    CardCollection.findOneAndDelete({ _id: img_id }, (err) => {
      if (err) console.log(err);
      res.status(200).json({
        message: { msgBody: "Successfully Removed", msgError: false },
      });
    });
  } catch (error) {
    res.status(500).json({
      message: { msgBody: "Error has occurred", msgError: true },
    });
  }
});
router.put("/:collection_id", async (req, res) => {
  const { collection_id } = req.params;
  const { image, price } = req.body;

  const newImage = await CardImage.findById({ _id: image });
  const updatedCollection = await CardCollection.findOneAndUpdate(
    { _id: collection_id },
    { image: newImage, price: price }
  );
  res.status(200).json({
    message: { msgBody: "Successfully Updated", msgError: false },
  });
  // try {
  //   const { img_id } = req.params;
  //   CardCollection.findOneAndDelete({ _id: img_id }, (err) => {
  //     if (err) console.log(err);
  //     res.status(200).json({
  //       message: { msgBody: "Successfully Removed", msgError: false },
  //     });
  //   });
  // } catch (error) {
  //   res.status(500).json({
  //     message: { msgBody: "Error has occurred", msgError: true },
  //   });
  // }
});

module.exports = router;
