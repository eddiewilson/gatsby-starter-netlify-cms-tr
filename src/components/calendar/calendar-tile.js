import React from "react";
import moment from "moment";
import styled from "styled-components";

const Tile = styled.div`
  background-color: grey;
`;

const CalendarTile = (props) => (
  <Tile>
    <header>{props.summary}</header>
    <main></main>
  </Tile>
);

export default CalendarTile;
