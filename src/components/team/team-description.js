import React from "react";

const TeamDescription = ({ ...props }) => (
  <div
    className="team-description"
    dangerouslySetInnerHTML={{ __html: props.description }}
  ></div>
);
export default TeamDescription;
