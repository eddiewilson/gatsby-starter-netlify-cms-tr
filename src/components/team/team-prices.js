import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Section = styled.div`
  margin-top: 104px;
  margin-bottom: 4rem;
  background-color: white;
  padding: 2rem;
  box-shadow: rgba(236, 236, 236, 0.6) 0px 5px 15px 5px;
  border-radius: 18px;
`;
const PriceTable = styled.div`
  display: grid;
  grid-template-columns: 50% 80px auto;
  grid-gap: 0px;
  div {
    padding: 0.6rem 0.2rem;
    border-bottom: 1px solid #ececec;
    font-size: 16px;
  }
  &:last-of-type {
    div {
      border-bottom: 0px solid transparent;
    }
  }
`;

const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 50% 80px auto;
  grid-gap: 0px;
`;

const TeamPrices = (props) => (
  <Section>
    <TableHeader>
      <h6>Treatment</h6>
      <h6>Price</h6>
      <h6>Duration</h6>
    </TableHeader>

    {props.prices.map((therapist) =>
      therapist === null || therapist === "undefined" ? (
        ""
      ) : (
        <PriceTable>
          <div>{therapist.treatment_type}</div>

          <div>{"£" + therapist.price}</div>

          <div>
            {" "}
            {therapist.duration.length === 1 || therapist.duration
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
