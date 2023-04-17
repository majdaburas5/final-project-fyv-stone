import React, {useState} from 'react';
import { TextField, Button, Container, Stack } from '@mui/material';
import { Link } from "react-router-dom"
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { registerCustomerUser } from "../api";

 
const RegisterForm = () => {
    const [id, setId] = useState(0)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
 
    function handleSubmit(event) {
        event.preventDefault();
        if(!checkEmail()){
          console.log("asdas");
          notify("email error")
          return
        }

        let user = {
          id:id,
          name: name,
          email: email,
          password: password,
          address: address,
          phone: phone,
        };
        console.log(user);
        registerCustomerUser(user)
    }
    const checkEmail = () =>{
      const regexExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;
      return regexExp.test(email)
    }
    const notify = (message) =>{
      toast("Basic Notification!", {
        position: toast.POSITION.TOP_LEFT
      });
    }
    return (
        <React.Fragment>
            <h2>SignUp</h2>
            <div onSubmit={handleSubmit} action={<Link to="/login" />}>
                <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
                    <TextField
                        type="text"
                        variant='outlined'
                        color='secondary'
                        label="Name"
                        onChange={e => setName(e.target.value)}
                        value={name}
                        fullWidth
                        required
                    />
                    <TextField
                        type="Number"
                        variant='outlined'
                        color='secondary'
                        label="ID"
                        onChange={e => setId(e.target.value)}
                        value={id}
                        fullWidth
                        required
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        color='secondary'
                        label="Phone Number"
                        onChange={e => setPhone(e.target.value)}
                        value={phone}
                        fullWidth
                        required
                    />
                </Stack>
                <TextField
                    type="email"
                    variant='outlined'
                    color='secondary'
                    label="Email"
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    fullWidth
                    required
                    sx={{mb: 4}}
                    
                />
                <TextField
                    type="password"
                    variant='outlined'
                    color='secondary'
                    label="Password"
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                    required
                    fullWidth
                    sx={{mb: 4}}
                />
                <TextField
                    type="text"
                    variant='outlined'
                    color='secondary'
                    label="Address"
                    onChange={e => setAddress(e.target.value)}
                    value={address}
                    fullWidth
                    required
                    sx={{mb: 4}}
                />
                <Button onClick = {handleSubmit} variant="outlined" 
color="secondary" type="submit">Register</Button>
            </div>
            <small>Already have an account? <Link to="/login">Login 
Here</Link></small>
     
        </React.Fragment>
    )
}
 
export default RegisterForm;
