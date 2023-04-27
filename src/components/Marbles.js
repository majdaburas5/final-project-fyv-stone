import React, { useState, useEffect } from "react";
import "../css/Products.css";
import { addToCart } from "../api";
import "../css/Marbles.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { marblesFromDB, filteredMarbles } from "../api";
import FilterButton from "./FilterButton";
import { Button } from "react-bootstrap";

export default function Marbles({ updateCartArray, cartArray, isLoggedIn,userType }) {
  const [marbles, setMarbles] = useState([]);
  const [quantities, setQuantities] = useState([]);
  const filterBy = ["type", "name", "style", "price"];

  useEffect(() => {
    marblesFromDB().then((res) => {
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

  const handleFilterChange = (value, filterName) => {
    let newMarbles = [...marbles];
    if (value === "A - Z") {
      newMarbles.sort((a, b) => a.name.localeCompare(b.name));
    } else if (value === "Z - A") {
      newMarbles.sort((a, b) => b.name.localeCompare(a.name));
    } else if (value === "High to Low") {
      newMarbles.sort((a, b) => b.price - a.price);
    } else if (value === "Low to High") {
      newMarbles.sort((a, b) => a.price - b.price);
    } else if (filterName == "type" || filterName == "style") {
      newMarbles = newMarbles.filter(
        (product) => product[filterName] === value
      );
    }
    setMarbles(newMarbles);
  };

  const cancelFilter = () => {
    marblesFromDB().then((res) => {
      setMarbles(res);
    });
  };

  const cart = (id, quantity) => {
    const marble = marbles.find((m) => m._id === id);
    addToCart(id).then((res) => {
      if (cartArray.find((item) => item.marble[0].name === marble.name))
        toast.success("Item has already been added to cart !");
      else if (quantity <= 0) toast.error("There is no quantity added !");
      else if (marble.quantity < quantity) {
        toast.warning(
          "We dont have the required quantity we will order it for you !"
        );

        updateCartArray([...cartArray, { marble: res, quantity: quantity }]);
      } else {
        updateCartArray([...cartArray, { marble: res, quantity: quantity }]);
        toast.success("Item added !");
      }
    });

    return cartArray;
  };

  return (
    <>
      <div className="filter-bar-container">
        {filterBy.map((f) => {
          return (
            <FilterButton
              handleFilterChange={handleFilterChange}
              filterName={f}
            />
          );
        })}
        <Button variant="filter" onClick={cancelFilter}>
          Clear Filter
        </Button>
      </div>
      <div className="cardContainer">
        {marbles &&
          marbles.map((m, index) => {
            const quantity =
              quantities.find((item) => item.id === m._id)?.quantity || 0;
            return (
              <div className="card" key={index}>
                <div className="card-media-wrapper">
                  <div
                    className="card-media"
                    style={{ backgroundImage: `url(${m.img})` }}
                  >
                    <h4 className="card-title">{m.name}</h4>
                  </div>
                </div>
                <div className="card-content">
                  <div className="card-info">
                    <h5 className="card-price">{m.price} ₪</h5>
                    <h5 className="card-style">{m.style}</h5>
                    <h5 className="card-type">{m.type}</h5>
                  </div>
                  {isLoggedIn ? (
                    <>
                      <label>Quantity:</label>
                      <input
                        id={`quantity_${m._id}`}
                        type="number"
                        value={quantity}
                        onChange={(event) =>
                          handleQuantityChange(m._id, event.target.value)
                        }
                        placeholder="insert your quantity"
                      />
                      <br />
                      <button
                        type="submit"
                        className="btn btn-dark"
                        onClick={() => {
                          cart(m._id, quantity);
                        }}
                      >
                        Add To Cart
                      </button>
                    </>
                  ) : (
                    <div> </div>
                  )}
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}
