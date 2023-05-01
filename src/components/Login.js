import {  Fragment,useState } from "react";
import { TextField, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginUser } from "../api";
import { loginManagerUser } from "../api";
import { getCustomers } from "../api";
import { ManagersFromDB } from "../api";
import * as bcrypt from 'bcryptjs'


export default function Login({ setUserType, setIsLoggedIn }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const customers = await getCustomers()
    const managers = await ManagersFromDB()

    setEmailError(false);
    setPasswordError(false);

    if (!email) {
      setEmailError(true);
    }
    if (!password) {
      setPasswordError(true);
    }
    if (email && password) {
      if (checkManagerUser(managers,email)) {
        loginManagerUser({ email: email, password: password });
        const account = managers.find((user) => user.email === email);
        if (account) {
          const isPasswordValid = bcrypt.compareSync(
            password,
            account.password
          );

          if (isPasswordValid) {
            localStorage.setItem("authenticated", true);
            setUserType("manager");
            setIsLoggedIn(true);
            navigate("/manager/home-page");
            toast.success("Logged in successfully");
          } else {
            toast.error("Invalid password Please try again.");
          }
        } else {
          toast.error("Incorrect email Please try again.");
        }
      } else {
        loginUser({ email: email, password: password });
        const account = customers.find((user) => user.email === email);
        if (account) {
          const isPasswordValid = bcrypt.compareSync(
            password,
            account.password
          );

          if (isPasswordValid) {
            localStorage.setItem("authenticated", true);
            setUserType("customer");
            setIsLoggedIn(true);
            navigate("/");
            toast.success("Logged in successfully");
          } else {
            toast.error("Invalid password Please try again.");
          }
        } else {
          toast.error("Incorrect email Please try again.");
        }
      }
    }
  };

  const checkManagerUser = (managers,email) => {
    const managersEmails = managers.map((manager) => manager.email);
    if (!managersEmails.includes(email)) {
      return false;
    }
    return true;
  };
  return (
    <Fragment>
      <form
        autoComplete="off"
        onSubmit={(e)=>handleSubmit(e)}
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
    </Fragment>
  );
}
