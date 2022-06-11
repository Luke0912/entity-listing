const Product = require("../models/product.model");

const httpStatus = require("http-status");

const getproduct = async (req, res, err) => {
  try {
    let products;
    const { type, category, sortBy, page, pagesize } = req.query;
    const skip = (page - 1) * pagesize;
    const totalpage = Math.ceil(await Product.find().countDocuments());
    console.log(req.query);
    if (type && category) {
      products = await Product.find({ type, category })
        .skip(skip)
        .limit(pagesize)
        .lean()
        .exec();
    } else if (type) {
      products = await Product.find({ type })
        .skip(skip)
        .limit(pagesize)
        .lean()
        .exec();
    } else if (category) {
      products = await Product.find({ category })
        .skip(skip)
        .limit(pagesize)
        .lean()
        .exec();
    } else {
      products = await Product.find({})
        .skip(skip)
        .limit(pagesize)
        .lean()
        .exec();
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
