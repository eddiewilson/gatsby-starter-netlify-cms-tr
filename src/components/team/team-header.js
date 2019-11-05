import React from "react";
import { Quals } from "./team.css";
import styled from "styled-components";

const H3 = styled.h3`
  color: #229393;
`;

const TeamHeader = ({ ...props }) => (
  <div className="team-header">
    <H3>{props.name}</H3>
    <Quals>{props.qualifications}</Quals>

    <h5>{props.treatments}</h5>
  </div>
);

export default TeamHeader;
