import Modal from '@mui/material/Modal'; 
import { Button, Typography } from '@mui/material';
import * as React from 'react';
import { Box } from '@mui/system';
import { useContext, useEffect } from 'react';
import { UserContext } from './UserProvider.js'; 
import clinicPriceData from './assets/clinic-price-data.json'; 
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

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

const BuyClinicPacksModal = (props) => {
    const { user, handleOpen } = useContext(UserContext); 
    const [open, setOpen] = React.useState(false);
    const [selectedEvent, setSelectedEvent] = React.useState(null); 
    const [inRegisterFlow, setInRegisterFlow] = React.useState(false); 
    const handleRegisterOpen = () => setOpen(true);
    const [success, setSuccess] = React.useState(false); 
    const [selectedPackage, setSelectedPackage] = React.useState(null); 

    const handleClose = () => {
        setOpen(false); 
        setSuccess(false); 
        setSelectedEvent(null); 
        setSelectedPackage(null); 
    };

    const onBuyClinicPacks = event => {
        if(user) {
            handleRegisterOpen()
        }
        else {
            handleOpen()
            setInRegisterFlow(true); 
        }
    }

    const onSubmitBuyClinicPacks = (event) => {
        event.preventDefault(); 
        if(selectedPackage) {
            setSuccess(true); 
        }
        
    }

    useEffect(() => {
        if(user && inRegisterFlow) {
            handleRegisterOpen(); 
            setInRegisterFlow(false); 
        }
        if(!user) {
            setInRegisterFlow(false); 
        }
    }, [user])

    return (
    <div>
        <Button onClick={onBuyClinicPacks} type="submit" style={{textAlign: "right", textDecoration: "none", backgroundColor: "#60A64E", borderRadius: "10px", color: "white", margin: "15px 0", padding: "6px 20px"}}>
            Buy Clinic Packs
        </Button>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
                <>
                    {!success && (
                        <Box sx={modalStyle}>
                            <Typography variant='h6' gutterBottom>
                                Buy Clinic Packs
                            </Typography>
                            {/* <Typography>
                                Selected Package: {selectedPackage?.memberType}, {selectedPackage?.duration}
                            </Typography> */}
                            <form onSubmit={onSubmitBuyClinicPacks}>
                                <FormControl style={{width: '100%', marginTop: '20px'}}>
                                    <InputLabel>Clinic Pack</InputLabel>
                                    <Select
                                    labelId="clinic-pack-filter"
                                    value={selectedPackage}
                                    label="Clinic Pack"
                                    onChange={event => setSelectedPackage(event.target.value)}
                                    >
                                    <MenuItem value="">Select Clinic Pack</MenuItem>
                                    {clinicPriceData.map((clinicPack) => (
                                        <MenuItem value={clinicPack}>{clinicPack.package}</MenuItem>
                                    ))}
                                    </Select>
                                    
                                </FormControl>
                                
                                <Button type="submit" style={{textAlign: "right", textDecoration: "none", backgroundColor: "#60A64E", borderRadius: "10px", color: "white", margin: "15px 0", padding: "6px 20px"}}>
                                    Purchase Clinic Pack
                                </Button>
                            </form>
                        </Box>
                    )}
                    {success && (
                        <Box sx={modalStyle}>
                            <Typography variant='h6'>
                                You're All Set
                            </Typography>
                            {/* <Typography>
                                Thank you for purchasing a {selectedLevel} {selectedPackage?.memberType} Membership for the {selectedPackage.formattedDuration}. We're looking forward to seeing you at the club!
                            </Typography> */}
                        </Box>
                    )}
                </>
        </Modal>
    </div>
    )
}

export default BuyClinicPacksModal;