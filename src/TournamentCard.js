import { tournamentData } from './assets/TournamentData.js';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Link from '@mui/material/Link'; 
import Grid from '@mui/material/Grid'; 

function TournamentCard(props) {
    const imagePlacement=props.tournamentData.imagePlacement; 

    const cardStyling = { 
        display: 'flex', 
        justifyContent: 'space-between', 
        borderRadius: "20px", 
        border: "none", 
        boxShadow: "none",
        backgroundColor: '#D7E9D3', 
        padding: '20px', 
        color: "#4E8932"
    }; 

    const cardMediaStyling = {
        width: "390px", 
        height: "285px",
        borderRadius: "20px"
    };

    const Placement= imagePlacement === "right" ? (
        <Card sx={cardStyling}>
            <CardContent>
                <Typography gutterBottom component="div" color="#4E8932" sx={{fontSize: "20px", fontWeight: 400}}>
                    {props.tournamentData.name}
                </Typography>
                <Typography gutterBottom component="div" color="#4E8932" sx={{fontSize: "18px", fontWeight: 400}}>
                    {props.tournamentData.date}
                </Typography>
                <Typography color="#4E8932" sx={{fontSize: "14px", fontWeight: 400}}>
                    {props.tournamentData.description}
                    <br/>
                    <br/>
                    {props.tournamentData.warmUpTime && (
                        <span><span style={{fontStyle: "italic"}}>Warm-Up Time</span>: {props.tournamentData.warmUpTime}</span>
                    )}
                    <br/>
                    {props.tournamentData.time && (
                        <span><span style={{fontStyle: "italic"}}>Time</span>: {props.tournamentData.time}</span>
                    )}
                    <br/>
                    <span style={{fontStyle: "italic"}}>Entry Fee</span>: {props.tournamentData.entryFee}
                </Typography>
            </CardContent>
            <CardMedia
            component="img"
            sx={cardMediaStyling}
            image={props.tournamentData.image}
            alt="tournament image"
            /> 
        </Card>
    ) : (
        <Card sx={cardStyling}>
                <CardMedia
                component="img"
                // height="400"
                sx={cardMediaStyling}
                image={props.tournamentData.image}
                alt="project image"
                />
                <CardContent sx={{paddingLeft: "30px", flexGrow: '1'}}>
                <Typography gutterBottom component="div" color="#4E8932" sx={{fontSize: "20px", fontWeight: 400}}>
                    {props.tournamentData.name}
                </Typography>
                <Typography gutterBottom component="div" color="#4E8932" sx={{fontSize: "18px", fontWeight: 400}}>
                    {props.tournamentData.date}
                </Typography>
                <Typography color="#4E8932" sx={{fontSize: "14px", fontWeight: 400}}>
                    {props.tournamentData.description}
                    <br/>
                    <br/>
                    {props.tournamentData.warmUpTime && (
                        <span><span style={{fontStyle: "italic"}}>Warm-Up Time</span>: {props.tournamentData.warmUpTime}</span>
                    )}
                    <br/>
                    {props.tournamentData.time && (
                        <span><span style={{fontStyle: "italic"}}>Time</span>: {props.tournamentData.time}</span>
                    )}
                    <br/>
                    <span style={{fontStyle: "italic"}}>Entry Fee</span>: {props.tournamentData.entryFee}
                </Typography>
                </CardContent>
        </Card>
    )

    return (
        <div className="TournamentCard" style={{width: '48%'}}>
            <Grid item xs={12}>
                <Link style={{textDecoration: "none"}}>
                    {Placement}
                </Link>
            </Grid>
        </div>
    )


}

export default TournamentCard; 