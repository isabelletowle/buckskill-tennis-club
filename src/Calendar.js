
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import './Calendar.css'
import Modal from '@mui/material/Modal'; 
import { Typography } from '@mui/material';
import * as React from 'react';
import Input from '@mui/material/Input'; 
import { Box } from '@mui/system';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton'; 
import RegisterModal from './RegisterModal';
import { useContext, useEffect } from 'react';
import { UserContext } from './UserProvider.js'; 

const localizer = momentLocalizer(moment);

const MyCalendar = (props) => {
    const { user, handleOpen } = useContext(UserContext); 
    const [open, setOpen] = React.useState(false);
    const [selectedEvent, setSelectedEvent] = React.useState(null); 
    const [inRegisterFlow, setInRegisterFlow] = React.useState(false); 
    const handleRegisterOpen = () => setOpen(true);

    const onSelectEvent = event => {
        setSelectedEvent(event)
        if(user) {
            handleRegisterOpen()
        }
        else {
            handleOpen()
            setInRegisterFlow(true); 
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

    function eventPropGetter(event) {
        console.log("event style getter"); 
        return {
            style: event.customStyles || {}
        }
    }

    return (
    <div className='calendar'>
        <Calendar
        localizer={localizer}
        events={props.myEventsList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        onSelectEvent={onSelectEvent}
        eventPropGetter={eventPropGetter}/>
        <RegisterModal open={open} setOpen={setOpen} setSelectedEvent={setSelectedEvent} selectedEvent={selectedEvent}/>
    </div>
    )
}

export default MyCalendar;