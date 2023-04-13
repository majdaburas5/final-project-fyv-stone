import React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { ManagersFromDB } from "../api";
import { useState, useEffect } from "react";

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
        <div>
          <Avatar
            alt="Remy Sharp"
            src={m.pic}
            sx={{ width: 200, height: 200 }}
          />
          <h3>{m.name}</h3>
          <h3>{m.phone}</h3>
          <i class="fa-light fa-city"></i> <h3>{m.city}</h3>
        </div>
      ))}
    </div>
  );
}
