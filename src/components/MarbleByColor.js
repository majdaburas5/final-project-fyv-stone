import React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import "../css/Products.css";

export default function MarbleByColor({ marblesByColor }) {
  return (
    <div className="cardContainer">
      {marblesByColor &&
        marblesByColor.map((m, index) => (
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
                {m.price}
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
