import marbles from "../server/database/databse";
const Marble = require("../server/models/marbleModel");

console.log(marbles);
marbles.map((m) => {
  let m1 = new Marble({
    code: m.code,
    type: m.type,
    price: m.price,
    quantity: m.quantity,
    style: m.style,
    name: m.name,
    img: m.img,
    color: m.color,
  });
  m1.save();
});
