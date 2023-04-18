const express = require("express");
const router = express.Router();
const Marble = require("../models/marbleModel");
const { findMarbleById } = require("../services/marbleService");

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

router.get("/marble/:id", function (req, res) {
  let id = req.params.id;
  Marble.find({ _id: id }).then((marble) => {
    res.send(marble);
  });
});

router.delete("/deleteMarble/:id", function (req, res) {
  let id = req.params.id;
  Marble.findOneAndDelete({ _id: id }).then((deleteMarble) =>
    res.send(deleteMarble)
  );
});

module.exports = router;
