import { Typography } from "@mui/material";

function BodyText(props) {
    return (
      <div className="BodyText" style={{marginBottom: "20px"}}>
          <Typography gutterBottom>
              {props.children}
          </Typography>
      </div>
    );
  }
  
  export default BodyText;