import React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { ManagersFromDB } from "../api";
import { useState, useEffect } from "react";
import "../css/Contact.css";

export default function Contact() {
  const [managers, setManagers] = useState([]);

  useEffect(() => {
    ManagersFromDB().then((res) => {
      setManagers(res);
    });
  }, []);

  return (
    <div>
      {managers.map((m) => (
        <div className="contact-card">
          <Stack direction="row" spacing={2}>
            <Avatar
              alt="Remy Sharp"
              src={m.pic}
              sx={{ width: 200, height: 200 }}
            />
            <div>
              <h3>{m.name}</h3>
              <div className="section">
                <h3>{m.phone}</h3>
              </div>
              <div className="section">
                <h3>{m.city}</h3>
              </div>
            </div>
          </Stack>
          <br />
        </div>
      ))}
    </div>
  );
}
