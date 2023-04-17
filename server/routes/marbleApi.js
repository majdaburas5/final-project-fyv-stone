const express = require("express");
const router = express.Router();
const Marble = require("../models/marbleModel");

router.get("/getMarbles", function (req, res) {
  Marble.find({}).then((marble) => {
    res.send(marble);
  });
});

router.get("/showMarbleByColor/:color", function (req, res) {
  let color = req.params.color;
  Marble.find({ color: color }).then((marbleByColor) => {
    res.send(marbleByColor);
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

router.get("/marble/:id", function (req, res) {
  let id = req.params.id;
  Marble.find({ _id: id }).then((marbleById) => {
    res.send(marbleById);
  });
});

router.delete("/deleteMarble/:id", function (req, res) {
  let id = req.params.id;
  Marble.findOneAndDelete({ _id: id }).then((deleteMarble) =>
    res.send(deleteMarble)
  );
});

module.exports = router;
