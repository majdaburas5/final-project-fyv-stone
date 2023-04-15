const express = require("express");
const router = express.Router();
const Customer = require("../models/customerModel");

router.post("/addCustomer", function (req, res) {
  const user = req.body.user;
  let u1 = new Customer({
    id: user.id,
    name: user.name,
    phone: user.phone,
    address: user.address,
    email: user.email,
    password: user.password,
  });
  u1.save();
});
module.exports = router;
