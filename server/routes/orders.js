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
  if (newQuantity > 0) {
    Marble.findOneAndUpdate(
      { _id: id },
      { quantity: newQuantity },
      { new: true }
    )
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
  } else {
    let orderedQuantity = newQuantity * -1 + 100;
    Marble.findOneAndUpdate(
      { _id: id },
      { quantity: orderedQuantity },
      { new: true }
    )
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
    // Order.findByIdAndUpdate({ _id: id }, { status: "ordered" }, { new: true })
    //   .then((updatedMarble) => {
    //     res.send(updatedMarble);
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //     res.status(500).send({ message: "Internal server error" });
    //   });
  }
});

const getOrderNumber = function () {
  return Order.find({})
    .sort({ orderNumber: -1 })
    .limit(1)
    .then((order) => {
      return order[0].orderNumber;
    });
};

// const getPurchaseTimes = function () {
//   return Cart.find({purchaseTimes:1})
//     .sort({ purchaseTimes: -1 })
//     .limit(1)
//     .then((purchase) => {
//       return purchase[0].purchaseTimes;
//     });
// };

router.post("/cart/addToCart", async function (req, res) {
  const date = new Date();
  let cartArray = [];
  let marbles = req.body.marble;
  const purchase = await getPurchaseTimes();

  marbles.forEach((m) => {
    cartArray.push(
      new Cart({
        marble: m.marble,
        quantity: m.quantity,
        // purchaseTimes: purchase + 1,
      })
    );
  });
  cartArray.forEach((cart) => {
    cart.save();
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
  await Order.find({}).then((cart) => {
    res.send(cart);
  });
});

router.get("/getCustomer/:id", async function (req, res) {
  let { id } = req.params;
  Customer.find({ _id: id }).then((customer) => {
    res.send(customer);
  });
});

router.get("/getCustomerOrder/:orderNumber", async function (req, res) {
  let { orderNumber } = req.params;
  Order.find({ orderNumber })
    .populate({
      path: "cart",
      populate: {
        path: "marble",
        model: "Marble",
      },
    })
    .then((order) => {
      res.send(order);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send("Internal Server Error");
    });
});

router.get("/getSpecificCustomerOrder/:customerId", async function (req, res) {
  let { customerId } = req.params;
  const user = await getCustomerById(customerId);
  Order.find({ customerId: user._id })
    .populate({
      path: "cart",
      populate: {
        path: "marble",
        model: "Marble",
      },
    })
    .then((order) => {
      res.send(order);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send("Internal Server Error");
    });
});

// router.put("/updateStatus/:status",function(req,res){
//   let {status}=req.params;
//   Order.findOneAndUpdate({})
// })

module.exports = router;
