import React from "react";

export default function Top5({marbles}) {
  return (
    <>
    <div className="top5Title">   
    <h2 className="faqs-title">Top 5 Selling</h2>
    </div>
    <div className="top5Card-Container">
      {marbles &&
        marbles.map((m, index) => {
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
            </div>
          );
        })}
    </div>
    </>
  );
}
