import { createContext, useEffect, useState } from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel'; 
import Input from '@mui/material/Input'; 
import { FormHelperText } from '@mui/material';

const UserContext = createContext(); 

function UserContextProvider({ children }) {
    const sessionUser = sessionStorage.getItem("user") || ""; 
    const [user, setUser] = useState(sessionUser);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const modalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        // border: '2px solid #000',
        boxShadow: 24,
        padding: 4,
        borderRadius: '15px'
    };

    useEffect(() => {
        sessionStorage.setItem("user", user);
    }, [user])

    const onLogin = event => {
        event.preventDefault()
        console.log(event)
        const username = event.target[0].value
        const password = event.target[1].value
        if(password && username) {
            sessionStorage.setItem("user", username)
            setUser(username)
            handleClose()
        }
    }

    const onLogOut = event => {
        sessionStorage.removeItem("user")
        setUser(null)
    }

    return(
        <UserContext.Provider value={{user, setUser, handleOpen, onLogOut}}>
           { children }
           <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={modalStyle}>
                
                <Typography>
                    Login
                </Typography>
                <form onSubmit={onLogin} style={{display: 'flex', flexDirection: "column"}}>
                    <Input aria-describedby="username" placeholder='Username' disableUnderline={true} style={{backgroundColor: "#E9E9E9", color: "#A5A4A4", borderRadius: "10px", margin: "15px 0", padding: "8px"}}/>
                    <Input aria-describedby="password" type="password" disableUnderline={true} placeholder='Password' style={{backgroundColor: "#E9E9E9", color: "#A5A4A4", borderRadius: "10px", margin: "15px 0", padding: "8px"}}/>
                    <Input aria-describedby='signup' type="submit" value="Sign Up" disableUnderline={true} style={{textAlign: "right", textDecoration: "none", backgroundColor: "#60A64E", borderRadius: "10px", color: "white", width: "40%", margin: "15px 0", padding: "5px"}}/>
                </form>
                
                </Box>
            </Modal>
        </UserContext.Provider>
    ); 
}
export { UserContext, UserContextProvider }