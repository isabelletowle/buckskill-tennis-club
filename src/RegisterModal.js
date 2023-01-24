import Modal from '@mui/material/Modal'; 
import { Typography } from '@mui/material';
import * as React from 'react';
import Input from '@mui/material/Input'; 
import { Box } from '@mui/system';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import IconButton from '@mui/material/IconButton'; 
import { useContext } from 'react';
import { UserContext } from './UserProvider.js'; 
import Button from '@mui/material/Button'; 

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

function RegisterModal (props) {

    const { user } = useContext(UserContext); 

    const handleClose = () => {
        props.setOpen(false); 
        props.setSelectedEvent(null); 
        setSuccess(false); 
        setParticipants(1); 
    };

    const [participants, setParticipants] = React.useState(1);
    const [success, setSuccess] = React.useState(false);  
    const [submittingEnrollment, setSubmittingEnrollment] = React.useState(false); 

    const onEnroll = event => {
        event.preventDefault()
        setSubmittingEnrollment(true); 
        setTimeout(() => {
            setSuccess(true); 
            setSubmittingEnrollment(false); 
        }, "1000")   
    }

    const handleParticipantAmount = increment => {
        const newParticipants = participants + increment; 
        if(newParticipants>0) {
            setParticipants(newParticipants); 
        }
    }

    const confirmationMessage = props.selectedEvent?.title ? (
            `You’re booked for ${participants} participant${participants>1 ? 's' : ''} at our ${props.selectedEvent?.title} from ${props.selectedEvent?.startTime}-${props.selectedEvent?.endTime} ${props.selectedEvent?.amOrPm} on ${props.selectedEvent?.date}. We’ll see you on the court!`
        ) : (
            `You’re booked for an ${props.selectedEvent?.location} lesson with ${participants} participant${participants>1 ? 's' : ''} from ${props.selectedEvent?.startTime}-${props.selectedEvent?.endTime} ${props.selectedEvent?.amOrPm} on ${props.selectedEvent?.date}. We’ll see you on the court!`
        ); 
    
    const defaultTitle = props.selectedEvent?.title || `Private Lesson`; 

    console.log("Props: ", props); 
    return(
        <Modal
            open={props.open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
                <>
                    {!success && (
                        <Box sx={modalStyle}>
                            <Typography variant='h6'>
                                Register for {defaultTitle}
                            </Typography>
                            <Typography>
                                {props.selectedEvent?.startTime}-{props.selectedEvent?.endTime} {props.selectedEvent?.amOrPm} with {props.selectedEvent?.instructor}
                                <br/>
                                {props.selectedEvent?.date}, {props.selectedEvent?.year}
                                <br/>
                                {props.selectedEvent?.participants ? `${props.selectedEvent?.participants}/30 registered` : ""}
                                <br/><br/>
                            </Typography>
                            <div style={{display: "flex", justifyContent: 'space-between'}}>
                                <div style={{display: 'flex', alignItems: 'center'}}>
                                    <AccountCircleRoundedIcon style={{color: "#60A64E", opacity: "0.25", fontSize: "35px"}}/>
                                    <Typography style={{color: "#4E8932", paddingLeft: "10px"}}>{ user }</Typography>
                                </div>
                                <div style={{display: 'flex', alignItems: 'center'}}>
                                    <IconButton style={{backgroundColor: "#E1DFDF"}} onClick={() => handleParticipantAmount(-1)}>
                                        <RemoveIcon style={{color: "white", backgroundColor: "#E1DFDF"}}/>
                                    </IconButton>
                                    <Typography style={{padding: '0 15px' }}>
                                        {participants} Participant{participants>1 ? 's' : ''}
                                    </Typography>
                                    <IconButton style={{backgroundColor: "#E1DFDF"}}onClick={() => handleParticipantAmount(1)}>
                                        <AddIcon style={{color: "white", backgroundColor: "#E1DFDF"}}/>
                                    </IconButton>
                                </div>
                            </div>
                            <form onSubmit={onEnroll}>
                                {submittingEnrollment ? (
                                    <Button disabled aria-describedby='enroll' disableUnderline={true} style={{minWidth: "50%", textAlign: "right", textDecoration: "none", backgroundColor: "rgb(225, 223, 223)", borderRadius: "10px", color: "white", margin: "15px 0", padding: "6px 20px"}}>Submitting</Button>
                                ) : (
                                        <Button aria-describedby='enroll' type="submit" disableUnderline={true} style={{minWidth: "50%", textAlign: "right", textDecoration: "none", backgroundColor: "#60A64E", borderRadius: "10px", color: "white", margin: "15px 0", padding: "6px 20px"}}>Enroll</Button>
                                )}
                            </form>
                            
                        </Box>
                    )}
                    {success && (
                        <Box sx={modalStyle}>
                            <Typography variant='h6'>
                                You're All Set
                            </Typography>
                            <Typography>
                                {confirmationMessage}
                            </Typography>
                        </Box>
                    )}
                </>
        </Modal>
    ); 
}

export default RegisterModal; 