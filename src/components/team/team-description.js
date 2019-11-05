import React from "react";
import { MarkdownPreview } from "react-marked-markdown";
import styled from "styled-components";

const Section = styled.div`
  margin-bottom: 4rem;
`;
const TeamDescription = ({ ...props }) => (
  <Section>
    <MarkdownPreview value={props.description} />
  </Section>
);
export default TeamDescription;
