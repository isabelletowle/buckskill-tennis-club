import Calendar from './Calendar.js'; 
import HeadingWithBorder from './HeadingWithBorder.js';
import BodyText from './BodyText'; 
import * as React from 'react';
import ClinicsPriceTable from './ClinicsPriceTable.js'; 
import BuyClinicPacksModal from './BuyClinicPacksModal.js'; 
import { createDates } from './utils/date.js'; 
import { adultClinicEventData } from './assets/AdultClinicEventData.js';

function createData(pack, currency, nonmember, member) {
  return { pack, currency, nonmember, member };
}

const rows = [
  createData('Drop-In: 1 Clinic', '$', '85', '72'), 
  createData('5 Clinics', '$', '380', '323'), 
  createData('10 Clinics', '$', '685', '582'), 
  createData('25 Clinics', '$', '1,575', '1,339'),
];

function AdultClinics(props) {
  const eventDates = createDates(adultClinicEventData, 10); //change this number to the number of weeks you want to generate events for 
  

    return (

      <div className="AdultClinics" style={{width: "100%"}}>
          <HeadingWithBorder>Adult Clinics</HeadingWithBorder>
          <BodyText>
          We offer daily group clinics for adults throughout the summer. Whether you are beginning your tennis career, just getting back into the game, or you are a seasoned veteran who has been playing for years, our clinics are a perfect choice for you. We guarantee top notch instruction and a great workout in a fun and social atmosphere!
          <br/>
          <br/>
          Adult clinics are scheduled in the morning and in the afternoon, 7 days a week. Monday through Friday Adult Clinics are scheduled at the same time as our Junior Clinics, from 9-10:30 a.m., 10:30-12:00 p.m., 1:00-2:30 p.m., and 2:30-4:00 p.m – highly convenient for parents of young tennis players, as the whole family can play at the same time!
          <br/>
          <br/>
          You can sign up day by day at the daily rate or week by week at the discounted package rate.
          </BodyText>
          <HeadingWithBorder>Summer 2022 Clinic Roster</HeadingWithBorder>
          <BodyText>
            <span style={{fontStyle: "italic", color: "#60A64E"}}>Buckskill Signature Clinic</span>
            <br/>
            All players welcome! Great for both intermediate and advanced players. Warmup drills followed by an assortment of fun, fast moving games. Court rotation ensures constant variation. 1.5 hours long, scheduled back to back in the mornings so you can create your own 3 hour mini camp. Scheduled concurrent with our junior clinics so the whole family can play at the same time.
            <br/>
            <br/>
            <span style={{fontStyle: "italic", color: "#60A64E"}}>Advanced Clinic</span>
            <br/>
            The focus of this clinic is point play and live ball drills. This group is run like a collegiate practice. High intensity and highly competitive. Level 4.5-5.5+ Limited spaces so make sure you sign up online in advance!
            <br/>
            <br/>
            <span style={{fontStyle: "italic", color: "#60A64E"}}>105 Clinic</span>
            <br/>
            The aim of this clinic is to develop aggression and an attacking game. Players play a game of doubles but with a different scoring method. Unforced errors are 1 point. A win from the baseline is 5 points and a volley winner is 10 points. The overhead winning shot scores the most at 20 points. The first team to reach 105 is the winner. This action-packed drill is very good for developing an aggressive game.
            <br/>
            <br/>
            <span style={{fontStyle: "italic", color: "#60A64E"}}>Serve and Return/Stroke of the Week</span>
            <br/>
            The serve is arguably the most important shot in tennis, yet infrequently practiced by most club players! Let's change that with this clinic and take your game to the next level! During this instructional 60-minute clinic we will be practicing serves and returns. All levels are welcomed! Scheduled so that it may be combined with the Buckskill Signature Clinic for great instruction followed by a great workout. Look out for “Stroke of the week” which will take place during this clinic as well.
            <br/>
            <br/>
            <span style={{fontStyle: "italic", color: "#60A64E"}}>Beginner Clinic</span>
            <br/>
            Learn to play tennis in a fun, instructive and supportive environment. Small group with focused instruction and individual attention.
          </BodyText>
          <HeadingWithBorder>Clinic Pricing</HeadingWithBorder>
          <ClinicsPriceTable rows={rows}/>
          <BuyClinicPacksModal/>
          <HeadingWithBorder>Schedule</HeadingWithBorder>
          <Calendar myEventsList={eventDates}/>
      </div>
    );
  }
  
  export default AdultClinics;