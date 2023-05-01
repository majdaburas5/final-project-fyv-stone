import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { marblesFromDB } from "../api";
import { deleteMarble } from "../api";
import "../manager-css/Managment.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

export default function Managment({ updateCartArray, cartArray }) {
  const [marbles, setMarbles] = useState([]);
  const [selectedMarbleImg, setSelectedMarbleImg] = useState("");

  useEffect(() => {
    marblesFromDB().then((res) => {
      setMarbles(res);
    });
  }, []);

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

  const deleteToggle = function (id) {
    deleteMarble(id);
  };

  return (
    <div className="cardContainer">
      {marbles &&
        marbles.map((m, index) => {
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
              <div
                class="card-buttons"
                style={{ display: "flex", gap: "10px" }}
              >
                <button
                  type="submit"
                  class="delete-button"
                  onClick={() => {
                    deleteToggle(m._id);
                  }}
                >
                  Delete
                </button>
                <Link to={`/edit/${m._id}`}>
                  <button type="submit" class="ubdate-button">
                    Update
                  </button>
                </Link>
              </div>
            </Card>
          );
        })}
    </div>
  );
}
