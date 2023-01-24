import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function ClinicsPriceTable(props) {

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
    <div>
        <TableContainer sx={{'& .MuiPaper-root-MuiTableContainer-root': {boxShadow: 'none',},}}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell style={tableHeadingStyling}>Package</TableCell>
                <TableCell align="center" style={tableHeadingStyling}>Non-Member</TableCell>
                <TableCell align="right" style={tableHeadingStyling}>Member (15% Off)</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {props.rows.map((row) => (
                <TableRow key={row.pack} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row" style={tableCellStyling}>
                    {row.pack}
                </TableCell>
                <TableCell align="right" style={tableCellStyling}>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <div style={{width: '20%', display: 'flex', justifyContent:'space-between'}}>
                            <div>{row.currency}</div>
                            <div>{row.nonmember}</div>
                        </div>
                    </div>
                </TableCell>
                <TableCell align="center" style={tableCellStyling}>
                    <div style={{display: 'flex', justifyContent: 'end'}}>
                        <div style={{width: '8%', display: 'flex', justifyContent: 'end'}}>
                            {row.member}
                        </div>
                    </div>
                </TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
        <div style={{height: '20px'}}/>
    </div>
  );
}