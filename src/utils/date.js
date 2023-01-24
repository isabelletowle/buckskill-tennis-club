import moment from 'moment'; 

export function addWeeks(date, weeks) {
    date.setDate(date.getDate()+7*weeks); 
    return date; 
}

export function createNextWeek(eventList) {
    const additionalWeek = eventList.map(event => {
        const clonedStart = new Date(event.start.toString()); 
        const clonedEnd = new Date(event.end.toString()); 
        const newStart = addWeeks(clonedStart, 1); 
        const newEnd = addWeeks(clonedEnd, 1); 
        const newDate = moment(newStart.toString()).format("dddd, MMMM Do"); 
        const newYear = newStart.getFullYear(); 
        return {
        ...event, 
        start: newStart, 
        end: newEnd, 
        year: newYear,
        date: newDate,
        }
    })
    return additionalWeek; 
}

export function createDates(eventList, numWeeks) {
    let masterEventList = [...eventList]; 
    let prevEventList = eventList; 
    for(let i = 0; i < numWeeks; i++) {
        const additionalWeek = createNextWeek(prevEventList); 
        masterEventList = [...masterEventList, ...additionalWeek]; 
        prevEventList = additionalWeek; 
    }
    return masterEventList; 
}
