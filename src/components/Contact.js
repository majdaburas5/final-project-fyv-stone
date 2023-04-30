import React, { useState, useEffect } from "react";
import "../css/Contact.css";
import { ManagersFromDB } from "../api";

export default function Contact() {
  const [managers, setManagers] = useState([]);

  useEffect(() => {
    ManagersFromDB().then((res) => {
      setManagers(res);
    });
  }, []);

  return (
    <>
      <h2 className="team-heading">Our Team</h2>
      <div className="contact-list">
        {managers.map((m) => (
          <div key={m.id} className="contact-card">
            <div className="avatar">
              <img src={m.pic} alt={m.name} />
            </div>
            <div className="info">
              <h3 className="name">{m.name}</h3>
              <div className="section">
                <h4 className="label">Phone:</h4>
                <span className="value">{m.phone}</span>
              </div>
              <div className="section">
                <h4 className="label">City:</h4>
                <span className="value">{m.city}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
