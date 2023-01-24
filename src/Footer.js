import Typography from '@mui/material/Typography';

function Footer() {
    return (
      <div className="Footer" style={{backgroundColor: "#60A64E", padding: '10px 0', color: "white"}}>
          <Typography sx={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
            Buckskill Tennis Club, 178 Buckskill Road, East Hampton, NY
          </Typography>
          <Typography sx={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
            (631)-324-2243
          </Typography>
      </div>
    );
  }
  
  export default Footer;