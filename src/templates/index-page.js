import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Findus from "../components/findus";
import Team from "../components/team/team";
import Calendar from "../components/calendar/calendar";

const IndexPage = (data) => (
  <Layout>
    <SEO title="Home" />
    <Findus />
    <Team />
    <Calendar {...data} />
  </Layout>
);

export default IndexPage;

export const aboutPageQuery = graphql`
  query CalendarQuery {
    allIcal(sort: { fields: start, order: DESC }) {
      nodes {
        summary
        start(formatString: "d")
        end(formatString: "d")
      }
    }
  }
`;
