import React from "react";
import PropTypes from "prop-types";
import TeamHeader from "./team-header";
import TeamDescription from "./team-description";

import TeamPrices from "./team-prices";
import TeamAvailability from "./team-availability";

import styled from "styled-components";

const TeamSection = styled.section``;
const Article = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 101px;
`;

const TeamMember = ({ teamMember }) => (
  <TeamSection>
    {teamMember.map((therapist) =>
      therapist === null ? (
        ""
      ) : (
        <Article className="team-member" key={therapist.name}>
          <div>
            <TeamHeader {...therapist} />
            <TeamDescription {...therapist} />
          </div>
          <div>
            <TeamPrices prices={therapist.prices} />
            <TeamAvailability />
          </div>
        </Article>
      )
    )}
  </TeamSection>
);

TeamMember.propTypes = {
  children: PropTypes.node,
  teamMember: PropTypes.array
};

export default TeamMember;
