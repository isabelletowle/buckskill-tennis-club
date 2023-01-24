import { Typography } from "@mui/material";

function HeadingWithBorder(props) {
    return (
      <div className="HeadingWithBorder" style={{borderBottom: "1px solid black", marginBottom: "20px"}}>
          <Typography variant='h5' gutterBottom>
              {props.children}
          </Typography>
      </div>
    );
  }
  
  export default HeadingWithBorder;