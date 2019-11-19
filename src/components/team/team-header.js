import React from "react";
import { Quals } from "./team.css";
import styled from "styled-components";

const H3 = styled.h3`
  color: #229393;
`;

const TeamHeader = ({ ...props }) => (
  <div className="team-header">
    <H3>
      {props.name}
      <Quals>{props.qualifications}</Quals>
    </H3>

    <h5 style={{ display: "none" }}>{props.treatments}</h5>
  </div>
);

export default TeamHeader;
