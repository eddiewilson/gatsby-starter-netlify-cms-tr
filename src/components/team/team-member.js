import React from "react";
import PropTypes from "prop-types";
import TeamHeader from "./team-header";
import TeamDescription from "./team-description";
import TeamLinks from "./team-links";
import TeamPrices from "./team-prices";
import TeamAvailability from "./team-availability";

// import styled from "styled-components"

const TeamMember = ({ teamMember }) => (
  <div className="col-6_sm-12">
    {teamMember.map((therapist) =>
      therapist === null ? (
        ""
      ) : (
        <article className="team-member">
          <TeamHeader {...therapist} />
          <TeamDescription {...therapist} />
          <TeamLinks {...therapist} />
          <TeamPrices />
          <TeamAvailability />
        </article>
      )
    )}
  </div>
);

TeamMember.propTypes = {
  children: PropTypes.node.isRequired,
  teamMember: PropTypes.array
};

export default TeamMember;
