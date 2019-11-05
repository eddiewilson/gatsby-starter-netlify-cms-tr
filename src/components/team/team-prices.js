import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Section = styled.div`
  margin-top: 104px;
  margin-bottom: 4rem;
`;
const PriceTable = styled.div`
  display: grid;
  grid-template-columns: 50% 80px auto;
  grid-gap: 0px;
  div {
    padding: 0.6rem 0.2rem;
    border-bottom: 1px solid #b3bec7;
  }
`;

const TeamPrices = (props) => (
  <Section>
    <h5>Treatments</h5>

    {props.prices.map((therapist) =>
      therapist === null || therapist === "undefined" ? (
        ""
      ) : (
        <PriceTable>
          <div>{therapist.treatment_type}</div>
          <div>{"£" + therapist.price}</div>
          <div>
            {" "}
            {therapist.duration.length == 1 || therapist.duration
              ? therapist.duration
              : ""}
          </div>
        </PriceTable>
      )
    )}
  </Section>
);

TeamPrices.propTypes = {
  prices: PropTypes.array
};

export default TeamPrices;
