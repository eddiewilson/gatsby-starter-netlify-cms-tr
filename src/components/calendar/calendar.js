import React from "react";
import moment from "moment";
import styled from "styled-components";
// import CalendarTile from "../calendar/calendar-tile";

const CalendarWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-column-gap: 36px;
`;

const Calendar = (props) => {
  // const dateArray = props.data.allIcal.nodes;
  // const sortedDates = dateArray.sort(function(a, b) {
  //   return a.start - b.start;
  // });
  //
  // // console.log(sortedDates);
  //
  // const groupedDays = sortedDates.reduce(function(r, a) {
  //   r[a.start] = r[a.start] || [];
  //   r[a.start].push(a);
  //
  //   return r;
  // }, Object.create(null));

  return (
    <div>
      <h2>Calendar Dates</h2>
      <CalendarWrapper></CalendarWrapper>
    </div>
  );
};

export default Calendar;

// {Object.entries(groupedDays).map((day, index) => (
//   <div key={index}>
//     <header>
//       {moment()
//         .day(day[0])
//         .format("dddd")}
//     </header>
//     {day[1].map((therapists, index) => (
//       <div key={index}>{therapists.summary}</div>
//     ))}
//   </div>
// ))}
