import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import * as React from 'react';

function EmployeeCard(props) {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const cardStyling = { 
        display: 'flex', 
        flexDirection: "column",
        borderRadius: "20px", 
        border: "none", 
        boxShadow: "none",
    }; 

    const cardMediaStyling = {
        width: "317px", 
        height: "317px",
        borderRadius: "20px"
    }

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

    return (
      <div className="EmployeeCard">
          
          <Card onClick={handleOpen} sx={cardStyling} >
            <CardMedia
                component="img"
                sx={cardMediaStyling}
                image={props.employeeData.image}
                alt="storyboard image"
                />
            <CardContent style={{padding: '8px 20px'}}>
                <Typography color="black" sx={{fontSize: '20px', textAlign: "left"}}>
                    {props.employeeData.name}
                </Typography>
                <Typography color="black" sx={{fontSize: "16px", fontWeight: 400, textAlign: "left"}}>
                    {props.employeeData.title}
                </Typography>
            </CardContent>
                
        </Card>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={modalStyle}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                {props.employeeData.name}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {props.employeeData.bio}
            </Typography>
            </Box>
        </Modal>
      </div>
    );
  }
  
  export default EmployeeCard;