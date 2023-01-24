import * as React from 'react'; 
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Typography } from '@mui/material';

function createData(benefit, description, full, partial) {
    return { benefit, description, full, partial };
}

const rows = [
    createData('Free Court Time', 'Grass, Har-Tru and DecoTurf', 'Yes', 'No'), 
    createData('Court Reservation Privileges', 'Book your court time up to 7 days in advance, then just show up and start playing, no need to waste your precious weekend mornings waiting on line', 'Yes', 'Yes'), 
    createData('Game Arranging', 'Whether you call in advance or just show up we will cheerfully arrange games for you', 'Yes', 'No'), 
    createData('Free Events', 'We host a number of fun social events ranging from serious Pro-Am tournaments to our famous "Tea at Wimbledon" and margarita mixers', 'Yes', 'No'), 
    createData('15% Discount', 'Applies to lessons and clinics (and court time for Partial Members, free for Full Members)', 'Yes', 'Yes'), 
    createData('Lesson Booking Privileges', 'Book individual lessons one week in advance or pre-pay for a minimum of 10 lessons and not only receive a 5% discount but also the ability to book your lessons for the whole season', 'Yes', 'Yes'), 
];

const headers = ['Membership Type', 'Duration', 'Full', 'Partial']; 

export default function MembershipBenefitComparison() {

    const tableCellStyling={
      borderBottom: 'none',
      padding: '16px 0',
      fontSize: '1rem',
      width: '25%', 
    }
  
    const tableHeadingStyling={
      borderBottom: 'none',
      padding: '0',
      fontSize: '1.1rem', 
    }
    
    return (
      <TableContainer sx={{'& .MuiPaper-root-MuiTableContainer-root': {boxShadow: 'none',},}}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={tableHeadingStyling}>Membership Benefit</TableCell>
              <TableCell align="start" style={tableHeadingStyling}></TableCell>
              <TableCell align="center" style={tableHeadingStyling}>Full</TableCell>
              <TableCell align="right" style={tableHeadingStyling}>Partial</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.benefit} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row" style={{borderBottom: 'none', padding: '10px 0', fontSize: '1rem', display: 'flex', alignItems: 'start', paddingRight: '75px', color: '#60A64E'}}>
                  {row.benefit}
                </TableCell>
                <TableCell component="th" scope="row" style={{borderBottom: 'none', padding: '10px 0', fontSize: '1rem', fontStyle: 'italic'}}>
                    <div>
                        {row.description}
                    </div>
                </TableCell>
                <TableCell align="right" style={{borderBottom: 'none', padding: '10px 0', fontSize: '1rem', width: '8%', verticalAlign: 'top'}}>
                  <div style={{display: 'flex', justifyContent: 'center'}}>
                      <div>{row.full}</div>
                  </div>
                </TableCell>
                <TableCell align="center" style={{borderBottom: 'none', padding: '10px 0', fontSize: '1rem', width: '8%', verticalAlign: 'top'}}>
                  <div style={{display: 'flex', justifyContent: 'end'}}>
                      <div style={{width: '8%', display: 'flex', justifyContent: 'end'}}>
                          {row.partial}
                      </div>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }