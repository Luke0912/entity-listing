const Product = require("../models/product.model");

const httpStatus = require("http-status");

const getproduct = async (req, res, err) => {
  try {
    let products;
    const { type, category, sortBy } = req.query;
    console.log(req.query);
    if (type && category) {
      products = await Product.find({ type, category }).lean().exec();
    } else if (type) {
      products = await Product.find({ type }).lean().exec();
    } else if (category) {
      products = await Product.find({ category }).lean().exec();
    } else {
      products = await Product.find({}).lean().exec();
    }
    // console.log(sortBy);
    if (sortBy) {
      if (sortBy === "high") {
        products.sort((a, b) => {
          return b.price - a.price;
        });
      } else if (sortBy === "low") {
        products.sort((a, b) => {
          return a.price - b.price;
        });
      }
    }

    res.status(httpStatus.OK).send(products);
  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST).send({ message: error.message });
  }
};

module.exports = { getproduct };
