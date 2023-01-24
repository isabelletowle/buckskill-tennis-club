import Modal from '@mui/material/Modal'; 
import { Button, Typography } from '@mui/material';
import * as React from 'react';
import { Box } from '@mui/system';
import { useContext, useEffect } from 'react';
import { UserContext } from './UserProvider.js'; 
import membershipData from './assets/membership-data.json'; 
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

const BuyMembershipModal = (props) => {
    const { user, handleOpen } = useContext(UserContext); 
    const [open, setOpen] = React.useState(false);
    const [inRegisterFlow, setInRegisterFlow] = React.useState(false); 
    const handleRegisterOpen = () => setOpen(true);
    const [success, setSuccess] = React.useState(false); 
    const [selectedPackage, setSelectedPackage] = React.useState(null); 
    const [selectedLevel, setSelectedLevel] = React.useState(null); 
    const [submittingMembership, setSubmittingMembership] = React.useState(false); 

    const handleClose = () => {
        setOpen(false); 
        setSuccess(false); 
        setSelectedPackage(null); 
        setSelectedLevel(null); 
    };

    const onBuyMembership = event => {
        if(user) {
            handleRegisterOpen()
        }
        else {
            handleOpen()
            setInRegisterFlow(true); 
        }
    }

    const onSubmitBuyMembership = (event) => {
        event.preventDefault(); 
        if(selectedPackage && selectedLevel) {
            setSubmittingMembership(true); 
            setTimeout(() => {
                setSuccess(true); 
                setSubmittingMembership(false); 
            }, "1000")
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
        <Button onClick={onBuyMembership} type="submit" style={{textAlign: "right", textDecoration: "none", backgroundColor: "#60A64E", borderRadius: "10px", color: "white", margin: "15px 0", padding: "6px 20px"}}>
            Buy Membership
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
                                Buy Membership
                            </Typography>
                            <form onSubmit={onSubmitBuyMembership}>
                                <FormControl style={{width: '100%', marginTop: '20px'}}>
                                    <InputLabel>Membership Package</InputLabel>
                                    <Select
                                    labelId="membership-package-filter"
                                    value={selectedPackage}
                                    label="Membership Package"
                                    onChange={event => setSelectedPackage(event.target.value)}
                                    >
                                    <MenuItem value="">Select Membership Package</MenuItem>
                                    {membershipData.map((membershipPackage) => (
                                        <MenuItem value={membershipPackage}>{membershipPackage.memberType}, {membershipPackage.duration}</MenuItem>
                                    ))}
                                    </Select>
                                    
                                </FormControl>
                                <FormControl style={{width: '100%', marginTop: '20px'}}>
                                    <InputLabel>Membership Level</InputLabel>
                                    <Select
                                    labelId="membership-level-filter"
                                    value={selectedLevel}
                                    label="Membership Level"
                                    onChange={event => setSelectedLevel(event.target.value)}
                                    >
                                    <MenuItem value="">Select Membership Level</MenuItem>
                                        <MenuItem value="Full">Full</MenuItem>
                                        <MenuItem value="Partial">Partial</MenuItem>
                                    </Select>
                                    
                                </FormControl>
                                <div style={{marginTop: "20px"}}>
                                    {selectedPackage && (
                                        <Typography><span style={{fontStyle: 'italic'}}>Selected Package</span>: {selectedPackage?.memberType}, {selectedPackage?.duration}</Typography>
                                    )}
                                    {selectedLevel && (
                                        <Typography><span style={{fontStyle: 'italic'}}>Selected Membership Level</span>: {selectedLevel}</Typography>
                                    )}
                                    {selectedPackage && selectedLevel && (
                                        <Typography><span style={{fontStyle: 'italic'}}>Price</span>: ${selectedPackage[selectedLevel.toLowerCase()]}</Typography>
                                    )}
                                </div>
                                {submittingMembership ? (
                                    <Button disabled style={{minWidth: "50%", textAlign: "right", textDecoration: "none", backgroundColor: "rgb(225, 223, 223)", borderRadius: "10px", color: "white", margin: "15px 0", padding: "6px 20px"}}>
                                        Submitting
                                    </Button>
                                ) : (
                                        <Button type="submit" style={{minWidth: "50%", textAlign: "right", textDecoration: "none", backgroundColor: "#60A64E", borderRadius: "10px", color: "white", margin: "15px 0", padding: "6px 20px"}}>
                                            Purchase Membership
                                        </Button>
                                    )
                                }
                            </form>
                        </Box>
                    )}
                    {success && (
                        <Box sx={modalStyle}>
                            <Typography variant='h6'>
                                You're All Set
                            </Typography>
                            <Typography>
                                Thank you for purchasing a {selectedLevel} {selectedPackage?.memberType} Membership for the {selectedPackage.formattedDuration}. We're looking forward to seeing you at the club!
                            </Typography>
                        </Box>
                    )}
                </>
        </Modal>
    </div>
    )
}

export default BuyMembershipModal;