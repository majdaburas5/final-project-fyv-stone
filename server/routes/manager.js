const express = require("express");
const router = express.Router();
const Marble = require("../models/marbleModel");
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
router.delete("/deleteMarble/:id", function (req, res) {
  let { id } = req.params;
  Marble.findOneAndDelete({ _id: id }).then((deleteMarble) =>
    res.send(deleteMarble)
  );
});

router.put("/updateMarble/:id", function (req, res) {
  const { id } = req.params;
  const { price, quantity } = req.body;

  Marble.findOneAndUpdate({ _id: id }, { price, quantity }, { new: true })
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

router.post("/addMarble", function (req, res) {
  const code = req.body.code;
  const type = req.body.type;
  const price = req.body.price;
  const quantity = req.body.quantity;
  const style = req.body.style;
  const name = req.body.name;
  const img = req.body.img;
  const color = req.body.color;

  let m1 = new Marble({
    code: code,
    type: type,
    price: price,
    quantity: quantity,
    style: style,
    name: name,
    img: img,
    color: color,
  });
  m1.save();
});

module.exports = router;
