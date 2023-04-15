import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "../css/Products.css";
import { MarblesFromDB } from "../api";
import { useState, useEffect } from "react";

export default function Products() {
  const [marbles, setMarbles] = useState([]);
  const [selectedMarbleImg, setSelectedMarbleImg] = useState("");

  useEffect(() => {
    MarblesFromDB().then((res) => {
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

  return (
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
  );
}
