const express = require("express");
const router = express.Router();
const Manager = require("../models/managerModel");

router.post("/addManager", function (req, res) {
  const id = req.body.id;
  const name = req.body.name;
  const phone = req.body.phone;
  const city = req.body.city;
  const pic = req.body.pic;
  const email = req.body.email;
  const password = req.body.password;

  let m1 = new Manager({
    id: id,
    name: name,
    phone: phone,
    city: city,
    pic: pic,
    email: email,
    password: password,
  });
  m1.save();
});

router.get("/getManagers", function (req, res) {
  Manager.find({}).then((manager) => {
    res.send(manager);
  });
});

module.exports = router;
