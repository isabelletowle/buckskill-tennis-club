import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {Link} from 'react-router-dom'; 
import {css} from '@emotion/react'; 

function DropdownMenu(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        event.preventDefault(); 
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    
    return (
        <div style={{display: "inline-block", color: "white"}}>
        <Link
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            style={props.linkStyling || {}}
            to="#"
        >
            {props.dropdownName}
        </Link>
        <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose} MenuListProps={{'aria-labelledby': 'basic-button',}} 
            sx={{'& .MuiList-root': {backgroundColor: '#60A64E',}, '& .MuiPaper-root': {boxShadow: 'none', borderRadius: '0 0 10px 10px', marginTop: '20px',},}}
        >
            {props.menuItems.map(menuItem => (
                <MenuItem onClick={handleClose} sx={{backgroundColor: "#60A64E", "&:hover":{backgroundColor: "#60A64E"}}}>
                    <Link to={menuItem.href} style={{textDecoration: "none", color: "white"}}>{menuItem.name}</Link>
                </MenuItem>
            ))}
        </Menu>
        </div>
    );
  }
  
  export default DropdownMenu;