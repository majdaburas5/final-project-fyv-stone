const express = require("express");
const router = express.Router();
const Marble = require("../models/marbleModel");

// router.get("/transactions", function (req, res) {
//   Transaction.find({}).then((transaction) => {
//     res.send(transaction);
//   });
// });

// router.get("/showTransactionByMonth/:month", function (req, res) {
//   let month = req.params.month;
//   Transaction.find({ month: month }).then((transactionByMonth) => {
//     res.send(transactionByMonth);
//   });
// });

// router.post("/addTransaction", function (req, res) {
//     const amount = req.body.newTransaction.amount;
//     const category = req.body.newTransaction.category;
//     const vendor = req.body.newTransaction.vendor;
//     const date = new Date();
//     const day = date.getDate();
//     const month = date.getMonth() + 1;
//     const year = date.getFullYear();
//     const formattedDate = `${day}-${month}-${year}`;

//     let t1 = new Transaction({
//       amount: amount,
//       category: category,
//       vendor: vendor,
//       date: formattedDate,
//       month: month,
//     });
//     t1.save();
//   });

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

// router.delete("/deleteTransaction/:transaction", function (req, res) {
//   let transaction = req.params.transaction;
//   Transaction.findOneAndDelete({ _id: transaction }).then((deleteTransaction) =>
//     res.send(deleteTransaction)
//   );
// });

// router.get("/sumByCategory", function (req, res) {
//   try {
//     Transaction.aggregate([
//       { $group: { _id: "$category", total_amount: { $sum: "$amount" } } },
//     ]).then((total) => res.send(total));
//   } catch (error) {
//     console.log(error);
//     res.status(500).send("error");
//   }
// });

// router.get("/sumAmount", function (req, res) {
//   try {
//     Transaction.aggregate([
//       { $group: { _id: "balance", total_amount: { $sum: "$amount" } } },
//     ]).then((total) => res.send(total));
//   } catch (error) {
//     console.log(error);
//     res.status(500).send("error");
//   }
// });

module.exports = router;
