const express = require("express");
const router = express.Router();
const Order = require("../models/orderModel");

router.post("/addToCart", function (req, res) {
  const cartItem = req.body.marble;
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const formattedDate = `${day}-${month}-${year}`;
  //   console.log(cartItem);
  let c1 = new Order({
    orderNumber: 1,
    orderDate: formattedDate,
    marbleCode: cartItem[0].marble,
    quantity: cartItem[0].quantity,
    status: "wait",
  });
  c1.save();
});

router.get("/marblesAddedToCart", function (req, res) {
  Order.find({}, { marbleCode: 1 })
    .populate("marbleCode")
    .then((marble) => {
      res.send(marble);
    });
});

module.exports = router;
