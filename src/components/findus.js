import React from "react";
import Map from "../components/map/map";
import styled from "styled-components";

const Section = styled.section``;

const Findus = () => {
  const mapboxApiAccessToken =
    "pk.eyJ1IjoidGhlcmFweXJvb21ib2RtaW4iLCJhIjoiY2ppN3FoYnN2MGN1cDN3bW5hdWdqMWNiMyJ9.FSOc3ZxJaYI5t42_CHkgcQ"; //process.env.GATSBY_MAPBOX_API_TOKEN // eslint-disable-line
  return (
    <Section className="section">
      <Map mapboxApiAccessToken={mapboxApiAccessToken} />
    </Section>
  );
};

export default Findus;
