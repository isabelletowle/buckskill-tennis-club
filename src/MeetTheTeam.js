
import * as React from 'react';
import employeeData from "./assets/meet-the-team-data";
import EmployeeCard from './EmployeeCard';
import Box from '@mui/material/Box';
import HeadingWithBorder from './HeadingWithBorder';

function MeetTheTeam() {
    return (
      <Box>
          <HeadingWithBorder>Meet the Team</HeadingWithBorder>
          <div style={{display: 'flex', flexWrap: 'wrap', gap: '20px'}}>
                {employeeData.map(data => (
                    <EmployeeCard employeeData={data} key={data.name}/>
                    
                ))}
            </div>
      </Box>
    );
  }
  
  export default MeetTheTeam;