import React, { useEffect, useState } from "react";
import { TextField, FormControl, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginUser } from "../api";
import { getCustomers } from "../api";

const bcrypt = require("bcryptjs");

export default function Login({ setIsLoggedIn }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [authenticated, setAuthenticated] = useState(
    localStorage.getItem(localStorage.getItem("authenticated") || false)
  );
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getCustomers().then((users, err) => {
      setUsers(users.data);
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    setEmailError(false);
    setPasswordError(false);

    if (email == "") {
      setEmailError(true);
    }
    if (password == "") {
      setPasswordError(true);
    }

    if (email && password) {
      loginUser({ email: email, password: password });
      const account = users.find((user) => user.email === email);
      if (account) {
        const isPasswordValid = bcrypt.compareSync(password, account.password);

        if (isPasswordValid) {
          setAuthenticated(true);
          localStorage.setItem("authenticated", true);
          setIsLoggedIn(true);
          console.log(localStorage.getItem("authenticated"));
          navigate("/");
          toast.success("Logged in successfully");
        }
      }
    }
  };
  return (
    <React.Fragment>
      <form
        autoComplete="off"
        onSubmit={handleSubmit}
        style={{ maxWidth: "500px", margin: "0 auto" }}
      >
        <h2>Login Page</h2>
        <TextField
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
          variant="outlined"
          color="secondary"
          type="email"
          sx={{ mb: 3 }}
          fullWidth
          value={email}
          error={emailError}
        />
        <TextField
          label="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
          variant="outlined"
          color="secondary"
          type="password"
          value={password}
          error={passwordError}
          fullWidth
          sx={{ mb: 3 }}
        />
        <Button variant="outlined" color="secondary" type="submit">
          Login
        </Button>
      </form>
      <small>
        Need an account? <Link to="/signup">Register here</Link>
      </small>
    </React.Fragment>
  );
}
