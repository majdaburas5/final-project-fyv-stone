const express = require("express");
const router = express.Router();
const Order = require("../models/orderModel");
const Customer = require("../models/customerModel");
const Cart = require("../models/cartModel");
const Marble = require("../models/marbleModel");

const getCustomerById = function (customerId) {
  return Customer.find({ id: customerId }).then((res) => {
    return res[0];
  });
};

const getOrderNumber = function () {
  return Order.find({})
    .sort({ orderNumber: -1 })
    .limit(1)
    .then((order) => {
      return order[0].orderNumber;
    });
};

const getQuantityById = async function (id) {
  const quantity = await Marble.find({ _id: id }, { quantity: 1 });
  return quantity[0].quantity;
};

router.put("/marble/:id", async function (req, res) {
  let { id } = req.params;
  let { quantity } = req.body;
  quantity = parseInt(quantity);
  const updatedQuantity = await getQuantityById(id);
  const newQuantity = updatedQuantity - quantity;
  Marble.findOneAndUpdate({ _id: id }, { quantity: newQuantity }, { new: true })
    .then((updatedMarble) => {
      if (updatedMarble) {
        res.send(updatedMarble);
      } else {
        res.status(404).send({ message: "Marble not found" });
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send({ message: "Internal server error" });
    });
});

router.post("/cart/addToCart", async function (req, res) {
  const date = new Date();
  // const day = date.getDate();
  // const month = date.getMonth() + 1;
  // const year = date.getFullYear();
  // const formattedDate = `${day}-${month}-${year}`;
  let cartArray = [];
  let marbles = req.body.marble;
  marbles.forEach((m) => {
    cartArray.push(
      new Cart({
        marble: m.marble,
        quantity: m.quantity,
      })
    );
  });

  const customer = await getCustomerById(req.body.customerId);
  const orderNum = await getOrderNumber();
  let c1 = new Order({
    orderNumber: orderNum + 1,
    orderDate: date,
    customerId: customer,
    cart: cartArray,
    status: "wait",
  });
  c1.save();
});

router.get("/marblesAddedToCart", async function (req, res) {
  const cart = await Order.find({})
    .populate("cart")
    .then((cart) => {
      return cart;
    })
    .populate("marble")
    .then((marbles) => {
      res.send(marbles);
    });
});

module.exports = router;
