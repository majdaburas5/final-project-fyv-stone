const express = require("express");
const router = express.Router();
const Marble = require("../models/marbleModel");
const Customer = require("../models/customerModel");
const jwt = require("jsonwebtoken");
const secretKey = "my_secret_key";

// const { findMarbleById } = require("../services/marbleService");

function findUser(id, currentEmail) {
  return Customer.find({ email: currentEmail }).then((user) => {
    return user;
  });
}


router.get("/getMarbles", authenticateToken, async function (req, res) {
  try {
    Marble.find({}).then((marble) => {
      res.send(marble);
    });
  } catch (error) {
    console.log(error);
    res.status(401).send({ message: "Invalid token" });
  }
});

function authenticateToken(req, res, next) {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).send({ message: 'Missing token' });
  }

  try {
    const decodedToken = jwt.verify(token, 'my_secret_key');
    const userId = decodedToken.userId;
    req.userId = userId;
    next();
  } catch (error) {
    console.error('Error decoding token:', error);
    return res.status(401).send({ message: 'Invalid token' });
  }
}

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

router.post("/marbles/filter", function (req, res) {
  let object = req.body;
  Marble.find(object.filterObj)
    .sort(object.sortObject)
    .then((marbles) => {
      res.send(marbles);
    });
});

router.get("/marbles/:filter", function (req, res) {
  let filter = req.params.filter;
  Marble.distinct(filter).then((filtered) => {
    res.send(filtered);
  });
});

module.exports = router;
