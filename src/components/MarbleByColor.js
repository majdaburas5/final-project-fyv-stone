import React from "react";
import "../css/MarbleByColor.css";

export default function MarbleByColor({ marblesByColor }) {
  return (
    <div className="card-byColor-container">
      {marblesByColor &&
        marblesByColor.map((m, index) => (
          <div className="card-byColor" key={index}>
            <div
              className="card-byColor-media"
              style={{ backgroundImage: `url(${m.img})` }}
            >
              <h4 className="card-byColor-title">{m.name}</h4>
            </div>

            <div className="card-byColor-content">
              <div className="card-byColor-info">
                <h5 className="card-byColor-price">{m.price} ₪</h5>
                <h5 className="card-byColor-style">{m.style}</h5>
                <h5 className="card-byColor-type">{m.type}</h5>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
