import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "../css/Products.css";
import { MarblesFromDB } from "../api";
import { addToCart } from "../components/AddToCart";
import TextField from "@mui/material/TextField";
import Cart from "./Cart";
import "../css/Marbles.css";

export default function Marbles() {
  const [marbles, setMarbles] = useState([]);
  const [cartArray, setCartArray] = useState([]);
  const [quantities, setQuantities] = useState([]);
  const [selectedMarbleImg, setSelectedMarbleImg] = useState("");

  useEffect(() => {
    MarblesFromDB().then((res) => {
      setMarbles(res);
    });
  }, []);

  const handleQuantityChange = (id, value) => {
    setQuantities((prevQuantities) => {
      const index = prevQuantities.findIndex((item) => item.id === id);
      if (index !== -1) {
        prevQuantities[index].quantity = value;
      } else {
        prevQuantities.push({ id, quantity: value });
      }
      return [...prevQuantities];
    });
  };

  const cart = (id, quantity) => {
    const marble = marbles.find((m) => m._id === id);
    addToCart(id).then((res) => {
      if (cartArray.find((item) => item.marble[0].name === marble.name))
        alert("Item has already been added to cart !");
      else if (quantity <= 0) alert("There is no quantity added !");
      else {
        setCartArray([...cartArray, { marble: res, quantity: quantity }]);
        alert("Item added !");
      }
    });
    return cartArray;
  };

  const MarbleImageModal = ({ imgUrl, onClose }) => {
    return (
      <div className="marble-image-modal">
        <div className="modal-content">
          <img src={imgUrl} />
          <button className="close-btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="cardContainer">
      {marbles &&
        marbles.map((m, index) => {
          const quantity =
            quantities.find((item) => item.id === m._id)?.quantity || 0;
          return (
            <Card sx={{ maxWidth: 345 }} className="card" key={index}>
              <CardMedia
                sx={{ height: 200 }}
                image={m.img}
                title={m.name}
                onClick={() => setSelectedMarbleImg(m.img)}
              />
              {selectedMarbleImg && (
                <MarbleImageModal
                  imgUrl={selectedMarbleImg}
                  onClose={() => setSelectedMarbleImg("")}
                />
              )}
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
                id={`quantity_${m._id}`}
                label="Quantity"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(event) =>
                  handleQuantityChange(m._id, event.target.value)
                }
                value={quantity}
                style={{
                  width: "250px",
                  paddingLeft: "80px",
                }}
                placeholder="insert your quantity"
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
          );
        })}
      {/* <Cart cartArray={cartArray} setCartArray={setCartArray} /> */}
    </div>
  );
}
