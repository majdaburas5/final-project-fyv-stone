import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "../css/Products.css";
import { marblesFromDB, filteredMarbles } from "../api";
import { useState, useEffect } from "react";
import FilterButton from "./FilterButton";

export default function Products() {
  const [marbles, setMarbles] = useState([]);
  const [selectedMarbleImg, setSelectedMarbleImg] = useState("");
  const filterBy = ["type", "name", "style", "price"];

  useEffect(() => {
    marblesFromDB().then((res) => {
      setMarbles(res);
    });
  }, []);

  const handleFilterChange = (value, filterName) => {
    let filterObj = {};
    let sortObject = {};
    if (value === "A - Z") {
      sortObject.name = 1;
    } else if (value === "Z - A") {
      sortObject.name = -1;
    } else if (value === "High to Low") {
      sortObject.price = -1;
    } else if (value === "Low to High") {
      sortObject.price = 1;
    } else {
      filterObj[filterName] = value;
    }
    filteredMarbles({ filterObj, sortObject }).then((res) => {
      setMarbles(res);
    });
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
  console.log(marbles);
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
      </div>
      <div className="cardContainer">
        {marbles &&
          marbles.map((m, index) => (
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
            </Card>
          ))}
      </div>
    </>
  );
}
