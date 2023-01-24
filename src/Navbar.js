import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import DropdownMenu from './DropdownMenu';
import LoginButton from './LoginButton';
import { fontSize } from '@mui/system';

const drawerWidth = 240;
const aboutDropdown=[
    {
        href: "/facilities-and-rules", 
        name: "Facilities & Club Rules"
    }, 
    {
        href: "/meet-the-team", 
        name: "Meet The Team"
    }
]; 
const clinicsDropdown=[
    {
        href: "/junior-clinics", 
        name: "Junior Clinics"
    }, 
    {
        href: "/adult-clinics", 
        name: "Adult Clinics"
    }
]; 


export default function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Buckskill Tennis Club
      </Typography>
      <Divider />
      <List>
      <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
                <Link to="/">HOME</Link>
            </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
                <Link to="/facilities-and-rules">FACILITIES & CLUB RULES</Link>
            </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
                <Link to="/meet-the-team">MEET THE TEAM</Link>
            </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
                <Link to="/memberships">MEMBERSHIPS</Link>
            </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
                <Link to="/lessons">LESSONS</Link>
            </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
                <Link to="/">CLINICS</Link>
            </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
                <Link to="/tournaments">TOURNAMENTS</Link>
            </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  const linkStyling={
      color: "#fff", 
      textDecoration: "none", 
      display: "inline-block", 
      padding: "0 10px", 
      fontSize: "16px", 
      fontWeight: '400', 
      lineHeight: 'normal'
  }

  return (
    <Box sx={{ display: 'flex'}}>
      <AppBar component="nav" sx={{ backgroundColor: "#60A64E", border: "none", boxShadow: "none"}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, paddingLeft: '20px', display: { xs: 'none', sm: 'block' } }}
          >
            Buckskill Tennis Club
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center' }}>
            <Link to="/" style={linkStyling}>
                HOME
            </Link>
            <DropdownMenu dropdownName="ABOUT" menuItems={aboutDropdown} linkStyling={linkStyling}/>
            <Link to="/memberships" style={linkStyling}>
                MEMBERSHIPS
            </Link>
            <Link to="/lessons" style={linkStyling}>
                LESSONS
            </Link>
            <DropdownMenu dropdownName="CLINICS" menuItems={clinicsDropdown} linkStyling={linkStyling}/>
            <Link to="/tournaments" style={linkStyling}>
                TOURNAMENTS
            </Link>
            <LoginButton/>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}