import Navbar from './Navbar.js'; 
import Footer from './Footer.js'; 
import {Outlet} from 'react-router-dom'; 
import Box from '@mui/material/Box';
import { UserContextProvider } from './UserProvider'; 

function Layout() {
    return (
      <UserContextProvider>
        <div className="Layout">
            <Navbar/>
            <Box sx={{display: "flex", flexDirection: 'row', justifyContent: 'center', padding: "100px 200px"}}>
              <Outlet/>
            </Box>
            <Footer/>
        </div>
      </UserContextProvider>
    );
  }
  
  export default Layout;