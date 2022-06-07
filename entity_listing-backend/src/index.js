const express = require("express");

const { getproduct } = require("./controllers/product.controller");

const router = express.Router();

router.get("/product", getproduct);

module.exports = router;
