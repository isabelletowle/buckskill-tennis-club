import Button from '@mui/material/Button';
import * as React from 'react';
import { useContext } from 'react';
import { UserContext } from './UserProvider.js'; 
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { Typography } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {Link} from 'react-router-dom'; 

const accountDropdown=[
  {
      href: "/", 
      name: "Account Info"
  }
]; 

function LoginButton(props) {
    console.log(sessionStorage.getItem("user"))
    const { user, handleOpen, onLogOut } = useContext(UserContext); 

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        event.preventDefault(); 
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    const handleLogOut = () => {
      handleClose();
      onLogOut();
    }

    const linkStyling={
      color: "#fff", 
      textDecoration: "none", 
      display: "inline-flex", 
      alignItems: "center", 
      padding: "0 10px", 
      fontSize: "16px", 
      fontWeight: '400', 
      lineHeight: 'normal', 
      height: '100%'
    }

    
    return (
      <span className="EmployeeCard" style={{height: '64px'}}> 
          {!user && (
            <Button onClick={handleOpen} style={{display: 'inline-flex', height: '100%'}}>
                <span style={{color: 'white'}}>Log In</span>
            </Button>
          )}
          {user && (
            <span style={{display: 'inline-flex', height: '100%'}}>
              <span style={{display: 'flex', alignItems: 'center', height: '100%'}}>
                  <AccountCircleRoundedIcon style={{color: "white", opacity: "0.25", fontSize: "35px", marginRight: "15px", marginLeft: '30px'}}/>
                  <div style={{height: '100%'}}>
                  <div style={{display: "inline-flex", alignItems: 'center', color: "white", height: '100%'}}>
                    <Link
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                        style={linkStyling || {}}
                        to="#"
                    >
                        <span>{user}</span>
                    </Link>
                    <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose} MenuListProps={{'aria-labelledby': 'basic-button',}} 
                        sx={{'& .MuiList-root': {backgroundColor: '#60A64E'}, '& .MuiPaper-root': {boxShadow: 'none', borderRadius: '0 0 10px 10px',},}}
                    >
                        {accountDropdown.map(menuItem => (
                            <MenuItem onClick={handleClose} sx={{backgroundColor: "#60A64E", "&:hover":{backgroundColor: "#60A64E"}}}>
                                <Link to={menuItem.href} style={{textDecoration: "none", color: "white"}}>{menuItem.name}</Link>
                            </MenuItem>
                        ))}
                        <MenuItem onClick={handleLogOut} sx={{backgroundColor: "#60A64E", color: 'white', "&:hover":{backgroundColor: "#60A64E"}}}>
                          Log Out
                        </MenuItem>
                    </Menu>
                    </div>
                  </div>
              </span>
              
            </span>
          )}
          
        
      </span>
    );
  }
  
  export default LoginButton;