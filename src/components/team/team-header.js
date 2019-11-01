import React from "react";
import { Quals } from "./team.css";

const TeamHeader = ({ ...props }) => (
  <div>
    <h3>
      {props.name}
      <Quals>{props.qualifications}</Quals>
    </h3>
    <h5>{props.treatments}</h5>
  </div>
);

export default TeamHeader;
