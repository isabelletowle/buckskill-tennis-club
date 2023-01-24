import logo from './logo.svg';
import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom"; 
import Home from './Home.js'; 
import About from './About.js'; 
import Layout from './Layout.js'; 
import FacilitiesAndRules from './FacilitiesAndRules';
import MeetTheTeam from './MeetTheTeam'; 
import { createTheme, ThemeProvider, styled } from '@mui/material/styles'; 
import AdultClinics from './AdultClinics'; 
import JuniorClinics from './JuniorClinics'; 
import Lessons from './Lessons';
import Memberships from './Memberships';
import Tournaments from './Tournaments'; 

function App() {
   
  const theme = createTheme({
    typography: {
      fontFamily: "Raleway, sans-serif"
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route path="/" element={<Layout/>}>
              <Route index element={<Home/>}/>
              <Route path="about" element={<About/>}/>
              <Route path="facilities-and-rules" element={<FacilitiesAndRules/>}/>
              <Route path="meet-the-team" element={<MeetTheTeam/>}/>
              <Route path="junior-clinics" element={<JuniorClinics/>}/>
              <Route path="adult-clinics" element={<AdultClinics/>}/>
              <Route path="lessons" element={<Lessons/>}/>
              <Route path="memberships" element={<Memberships/>}/>
              <Route path="tournaments" element ={<Tournaments/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
