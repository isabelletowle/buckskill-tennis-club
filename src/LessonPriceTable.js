import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function createData(pack, currency, nonmember, member, offsite) {
  return { pack, currency, nonmember, member, offsite };
}

const rows = [
  createData('1 Hour Lesson with Head Pro', '$', '200', '170', '210'),
  createData('1 Hour Lesson with Tour Pro', '$', '190', '162', '200'),
  createData('1 Hour Lesson with Staff Pro', '$', '180', '153', '190'),
  createData('10-Lesson Pack with Head Pro', '$', '1,900', '1,615', '1,995'),
  createData('10-Lesson Pack with Tour Pro', '$', '1,805', '1,534', '1,900'),
  createData('10-Lesson Pack with Staff Pro', '$', '1,710', '1,454', '1,805'),
];

export default function LessonPriceTable() {

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
            <TableCell style={tableHeadingStyling}>Lesson Type</TableCell>
            <TableCell align="center" style={tableHeadingStyling}>Non-Member Onsite</TableCell>
            <TableCell align="center" style={tableHeadingStyling}>Member Onsite</TableCell>
            <TableCell align="center" style={tableHeadingStyling}>Offsite</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
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
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <div style={{width: '8%', display: 'flex', justifyContent: 'end'}}>
                        {row.member}
                    </div>
                </div>
              </TableCell>
              <TableCell align="center" style={tableCellStyling}>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <div style={{width: '1%', display: 'flex', justifyContent: 'end'}}>
                        {row.offsite}
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