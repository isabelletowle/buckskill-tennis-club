import * as React from 'react';
import { tournamentData } from './assets/TournamentData.js';
import TournamentCard from './TournamentCard'; 
import Box from '@mui/material/Box';
import HeadingWithBorder from './HeadingWithBorder';

function Tournaments() {
    return (
      <Box>
          <HeadingWithBorder>Tournaments</HeadingWithBorder>
          <div style={{display: 'flex', flexWrap: 'wrap', gap: '20px'}}>
                {tournamentData.map(tournament => (
                    <TournamentCard tournamentData={tournament} key={tournament.name}/>
                    
                ))}
            </div>
      </Box>
    );
  }
  
  export default Tournaments;