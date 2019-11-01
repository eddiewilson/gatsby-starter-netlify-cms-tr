import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Findus from "../components/findus";
import Team from "../components/team/team";
import Calendar from "../components/calendar";
import Footer from "../components/footer";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Findus />
    <Team />
    <Calendar />
    <Footer />
  </Layout>
);

export default IndexPage;
