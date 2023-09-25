const express = require("express");
const httpStatus = require("http-status");

const router = express.Router();

const Product = require("../models/product.model");

router.post("", async (req, res) => {
  try {
      // console.log('req: ', req);
      const product = await Product.create(req.body);
      return res.status(201).send(product);
    } catch (error) {
      return res.status(500).send({ message: error.message });
    }
  });
  

router.get("", async (req, res) => {
  try {
    let product ;
    product = await Product.find()
    res.status(httpStatus.OK).send(product);
  } catch (err) {
    return res.status(httpStatus.BAD_REQUEST).send({ message: err.message });
  }
});

module.exports = router;