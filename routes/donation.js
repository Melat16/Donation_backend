const donation = require("../models/DonationModel");
const router = require("express").Router();

//CREATE A DONATION 

router.post("/", async (req, res) => {
  const newDonation = new donation(req.body);
  try {
    const savedDonation = await newDonation.save();
    res.status(200).json(savedDonation);
  } catch (err) {
    res.status(500).json(err);
  }
});

 //GET ALL DONATION 
router.get("/", async (req, res) => {
  try {
    const request = await donation.find();
    res.status(200).json(request);
  } catch (err) {
    res.status(500).json({
      message: "No data found",
     })
     }
});

module.exports = router;