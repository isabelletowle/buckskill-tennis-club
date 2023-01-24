import * as React from 'react'; 
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import membershipData from './assets/membership-data.json'; 

const headers = ['Membership Type', 'Duration', 'Full', 'Partial']; 

export default function MembershipPriceTable() {

    const tableCellStyling={
      borderBottom: 'none',
      padding: '0',
      fontSize: '1rem', 
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
              <TableCell style={tableHeadingStyling}>Membership Type</TableCell>
              <TableCell align="start" style={tableHeadingStyling}>Duration</TableCell>
              <TableCell align="center" style={tableHeadingStyling}>Full</TableCell>
              <TableCell align="right" style={tableHeadingStyling}>Partial</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {membershipData.map((row) => (
              <TableRow key={row.full} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row" style={tableCellStyling}>
                  {row.memberType}
                </TableCell>
                <TableCell component="th" scope="row" style={tableCellStyling}>
                    <div>
                        {row.duration}
                    </div>
                </TableCell>
                <TableCell align="right" style={tableCellStyling}>
                  <div style={{display: 'flex', justifyContent: 'center'}}>
                    <div style={{width: '60%', display: 'flex', justifyContent:'space-between'}}>
                      <div>$</div>
                      <div>{row.full}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell align="center" style={tableCellStyling}>
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