import Calendar from './Calendar.js'; 
import HeadingWithBorder from './HeadingWithBorder.js';
import BodyText from './BodyText'; 
import * as React from 'react';
import ClinicsPriceTable from './ClinicsPriceTable.js';
import { juniorClinicEventData } from './assets/JuniorClinicEventData.js';
import { createDates } from './utils/date.js'; 

function createData(pack, currency, nonmember, member) {
  return { pack, currency, nonmember, member };
}

const rows = [
  createData('Drop-In: 1 Clinic', '$', '85', '72'), 
  createData('5 Clinics', '$', '380', '323'), 
  createData('10 Clinics', '$', '685', '582'), 
  createData('25 Clinics', '$', '1,575', '1,339'),
  createData('50 Clinics', '$', '2,900', '2,465'),
];

function JuniorClinics(props) { 
  const eventDates = createDates(juniorClinicEventData, 10); //change this number to the number of weeks you want to generate events for 

  
    return (

      <div className="JuniorClinics" style={{width: "100%"}}>
          <HeadingWithBorder>Junior Clinics</HeadingWithBorder>
          <BodyText>
          The Buckskill Junior Program is designed to accommodate total flexibility in your schedule. Our junior program comprises of a series of 1.5-hour clinics with four clinics scheduled per day, Monday through Friday. You may create your own schedule by choosing to come to any number or any combination of clinics (1 through 4) per day.
          <br/>
          <br/>
          In this way, you can schedule your child for a full day of tennis (4 clinics from 9 a.m. to 4 p.m. with an hour for lunch), mornings only (2 clinics from 9 a.m. to noon, with a lunch option from noon to 1p.m.), a late start (3 clinics from 10:30 a.m. to 4p.m), or schedule an hour and a half clinic whenever you feel like it or any other combination that suits your child.
          <br/>
          <br/>
          You may pay clinic by clinic or purchase a discounted clinic package (see below for details).
          <br/>
          <br/>
          All instructional groups are organized by tennis ability (all ages and abilities are welcome). We stress the importance of enjoying the game of tennis while learning and continuing to improve.
          <br/>
          <br/>
          Clinics run Monday through Friday from 9-10:30 a.m., 10:30-12:00 p.m., 1:00-2:30 p.m., and 2:30-4:00 p.m. Lunch is offered for an additional $18 per day and is served between 12 and 1 pm. 
          </BodyText>
          <HeadingWithBorder>Clinic Pricing</HeadingWithBorder>
          <ClinicsPriceTable rows={rows}/>
          <HeadingWithBorder>Schedule</HeadingWithBorder>
          <Calendar myEventsList={eventDates}/>
      </div>
    );
  }
  
  export default JuniorClinics;