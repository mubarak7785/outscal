const express=require("express")

const router= express.Router();

const Data=require("../models/data.model")

router.post("", async function (req, res) {
    try {
      const data = await Data.create(req.body);
      return res.status(201).send(data);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });

  router.get("", async function (req, res) {
    try {
      const data= await Data.find().lean().exec();
      return res.status(201).send(data);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });
  
  module.exports = router;
  