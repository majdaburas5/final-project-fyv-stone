import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "../css/Products.css";
import { MarblesFromDB } from "../api";
import { useState, useEffect } from "react";
import { addToCart } from "../components/AddToCart";
import TextField from "@mui/material/TextField";
import Cart from "./Cart";

export default function Marbles() {
  const [marbles, setMarbles] = useState([]);

  useEffect(() => {
    MarblesFromDB().then((res) => {
      setMarbles(res);
    });
  }, []);

  const [quantity, setQuantity] = useState("");

  const [cartArray, setCartArray] = useState([]);
  const cart = (id, quantity) => {
    addToCart(id).then((res) => {
      if (cartArray.includes(res.name))
        alert("Item has already been added to cart !");
      else if (quantity <= 0 || quantity === "")
        alert("There is no quantity added !");
      else {
        setCartArray([...cartArray, { marble: res, quantity: quantity }]);
        alert("Item added !");
      }
    });
    return cartArray;
  };

  return (
    <div className="cardContainer">
      {marbles &&
        marbles.map((m, index) => (
          <Card sx={{ maxWidth: 345 }} className="card" key={index}>
            <CardMedia sx={{ height: 200 }} image={m.img} title={m.name} />
            <CardContent className="font">
              <Typography gutterBottom variant="h5" component="div">
                {m.name}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                <i
                  class="fa-solid fa-tag fa-rotate-90 fa"
                  style={{ color: "black" }}
                ></i>{" "}
                {m.price} ₪
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                <i class="fa-light fa-bars fa" style={{ color: "black" }}></i>{" "}
                {m.code}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                <i class="fa-solid fa-fire-flame-simple"></i> {m.style}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                <i class="fa-light fa-gem fa" style={{ color: "black" }}></i>{" "}
                {m.type}
              </Typography>
            </CardContent>
            <TextField
              id="outlined-number"
              label="Quantity"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(event) => setQuantity(event.target.value)}
              value={quantity}
              style={{
                width: "250px",
                paddingLeft: "90px",
              }}
            />
            <br />
            <button
              type="submit"
              class="btn btn-dark"
              onClick={() => cart(m._id, quantity)}
            >
              Add To Cart
            </button>
          </Card>
        ))}
      <Cart cartArray={cartArray} />
    </div>
  );
}
