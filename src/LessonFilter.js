import lessonData from './assets/available-lessons-data.json'; 
import { useState, useEffect, useCallback, useContext } from 'react'; 
import Box from '@mui/material/Box'; 
import Button from '@mui/material/Button'; 
import { Typography } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import RegisterModal from "./RegisterModal";
import * as React from 'react';
import HeadingWithBorder from './HeadingWithBorder';
import BodyText from './BodyText.js'; 
import { UserContext } from './UserProvider.js'; 

const findUniqueDates = () => {
    const dateMap = lessonData.reduce((acc, lesson) => {
        acc[lesson.date] = true;
        return acc; 
    }, {})
    console.log(dateMap); 
    return Object.keys(dateMap); 
}

const findUniqueInstructors = () => {
    const instructorMap = lessonData.reduce((acc, lesson) => {
        acc[lesson.instructor] = true;
        return acc; 
    }, {})
    console.log(instructorMap); 
    return Object.keys(instructorMap); 
}

function LessonFilter() {
    const [availableLessons, setAvailableLessons] = useState([]);
    const [filteredDate, setFilteredDate] = useState(""); 
    const [filteredLessonLength, setFilteredLessonLength] = useState(""); 
    const [filteredLocation, setFilteredLocation] = useState(""); 
    const [filteredInstructor, setFilteredInstructor] = useState(""); 
    const dateMenuItems = findUniqueDates(); 
    const instructorMenuItems = findUniqueInstructors(); 
    const { user, handleOpen } = useContext(UserContext);
    const [inRegisterFlow, setInRegisterFlow] = React.useState(false);  

    const [open, setOpen] = React.useState(false);
    const [selectedEvent, setSelectedEvent] = React.useState(null); 
    const handleLessonModalOpen = () => setOpen(true);

    const onSelectEvent = event => {
        setSelectedEvent(event)
        if(user) {
            handleLessonModalOpen()
        }
        else {
            handleOpen(); 
            setInRegisterFlow(true); 
        }
    }

    useEffect(() => {
        if(user && inRegisterFlow) {
            handleLessonModalOpen(); 
            setInRegisterFlow(false); 
        }
        if(!user) {
            setInRegisterFlow(false); 
        }
    }, [user])

    const filter = useCallback(() => {
        
        const newAvailableLessons = [...lessonData]
            .filter(lesson => {
                if(!filteredDate) return true;
                if(filteredDate === lesson.date) return true; 
                return false; 
            })
            .filter(lesson => {
                if(!filteredLessonLength) return true;
                if(filteredLessonLength === lesson.lessonLength) return true; 
                return false; 
            })
            .filter(lesson => {
                if(!filteredLocation) return true;
                if(filteredLocation === lesson.location) return true; 
                return false; 
            })
            .filter(lesson => {
                if(!filteredInstructor) return true;
                if(filteredInstructor === lesson.instructor) return true; 
                return false; 
            })
        setAvailableLessons(newAvailableLessons); 
    }, [filteredDate, filteredLessonLength, filteredLocation, filteredInstructor])

    useEffect(() => {
        if (filteredDate || filteredLessonLength || filteredLocation || filteredInstructor) {
            filter();
        }
    }, [filteredDate, filteredLessonLength, filteredLocation, filteredInstructor, filter])

    const clearFilters = () => {
        setFilteredDate(""); 
        setFilteredLessonLength(""); 
        setFilteredLocation(""); 
        setFilteredInstructor(""); 
        setAvailableLessons([]); 
    }

    return (
        <div style={{width: '100%'}}>
            <HeadingWithBorder>Book a Lesson</HeadingWithBorder>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '94%', marginBottom: '20px'}}>
                    <div style={{width: '1080px'}}>
                        <FormControl style={{width: '25%'}}>
                            <InputLabel id="date-filter">Date</InputLabel>
                            <Select
                            labelId="date-filter"
                            value={filteredDate}
                            label="Date"
                            onChange={event => setFilteredDate(event.target.value)}
                            >
                            <MenuItem value="">Select Date</MenuItem>
                            {dateMenuItems.map((dateMenuItem, index) => (
                                <MenuItem value={dateMenuItem}>{dateMenuItem}</MenuItem>
                            ))}
                            </Select>

                        </FormControl>
                        <FormControl style={{width: '25%'}}>
                            <InputLabel id="lesson-length-filter">Lesson Length</InputLabel>
                            <Select
                            labelId="lesson-length-filter"
                            value={filteredLessonLength}
                            label="Lesson Length"
                            onChange={event => setFilteredLessonLength(event.target.value)}
                            >
                            <MenuItem value="">Select Lesson Length</MenuItem>
                            <MenuItem value="30 minutes">30 Minutes</MenuItem>
                            <MenuItem value="1 hour">1 Hour</MenuItem>
                            <MenuItem value="1.5 hours">1.5 Hours</MenuItem>
                            <MenuItem value="2 hours">2 Hours</MenuItem>
                            </Select>

                        </FormControl>
                        <FormControl style={{width: '25%'}}>
                            <InputLabel id="location-filter">Location</InputLabel>
                            <Select
                            labelId="location-filter"
                            value={filteredLocation}
                            label="Location"
                            onChange={event => setFilteredLocation(event.target.value)}
                            >
                            <MenuItem value="">Select Location</MenuItem>
                            <MenuItem value="onsite">Onsite</MenuItem>
                            <MenuItem value="offsite">Offsite</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl style={{width: '25%'}}>
                            <InputLabel id="instructor-filter">Instructor</InputLabel>
                            <Select
                            labelId="instructor-filter"
                            value={filteredInstructor}
                            label="Instructor"
                            onChange={event => setFilteredInstructor(event.target.value)}
                            >
                            <MenuItem value="">Select Instructor</MenuItem>
                            {instructorMenuItems.map((instructorMenuItem, index) => (
                                <MenuItem value={instructorMenuItem}>{instructorMenuItem}</MenuItem>
                            ))}
                            </Select>

                        </FormControl>
                    </div>
                    <Button onClick={clearFilters} style={{backgroundColor: '#E1F0FC', color: 'rgb(11, 135, 225)', marginLeft: '10px', borderRadius:'15px', padding: '6px 20px'}}>
                        Clear Filters
                    </Button>
                </div>
            </div>
            <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                <div style={{display: 'flex', gap: '10px', flexWrap: 'wrap', width: '94%', marginBottom: '20px'}}>
                    {availableLessons.map((lesson, index) => (
                        <Button disableRipple key={index.toString()} onClick={() => onSelectEvent(lesson)} style={{backgroundColor: '#0B87E1', borderRadius: '15px', color: 'white', padding: '5px 20px', display: 'flex', flexDirection: 'column', textTransform: 'none', minWidth: '240px'}}>
                            <Typography variant='bold' style={{padding: 'none', margin: 'none'}}>
                                {lesson.time}
                            </Typography>
                            <Typography style={{fontSize: '12px', padding: 'none', margin: 'none'}}>
                                {lesson.length} lesson with {lesson.instructor}
                            </Typography>
                        </Button>
                    ))}
                </div>
            </div>
            <RegisterModal open={open} setOpen={setOpen} setSelectedEvent={setSelectedEvent} selectedEvent={selectedEvent}/>
        </div>
    ); 
}
export default LessonFilter; 