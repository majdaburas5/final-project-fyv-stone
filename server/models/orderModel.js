const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Customer = require("../models/customerModel");
const Marble = require("../models/marbleModel");

const orderSchema = new Schema({
  orderNumber: Number,
  orderDate: String,
  customerId: { type: Schema.Types.ObjectId, ref: "Customer" },
  marbleCode: [{ type: Schema.Types.ObjectId, ref: "Marble" }],
  quantity: Number,
  status: String,
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
