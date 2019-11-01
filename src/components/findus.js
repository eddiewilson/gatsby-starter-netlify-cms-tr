import React from "react";
import Map from "../components/map/map";

const Findus = () => {
  const mapboxApiAccessToken =
    "pk.eyJ1IjoidGhlcmFweXJvb21ib2RtaW4iLCJhIjoiY2ppN3FoYnN2MGN1cDN3bW5hdWdqMWNiMyJ9.FSOc3ZxJaYI5t42_CHkgcQ"; //process.env.GATSBY_MAPBOX_API_TOKEN // eslint-disable-line
  return (
    <section id="two" className="section">
      <div className="container">
        <div className="grid-center-noGutters">
          <div className="col-6">
            <h2 style={{ position: "absolute", zIndex: "10" }}>
              Located in the heart of Bodmin
            </h2>
          </div>
        </div>
      </div>
      <div className="grid">
        <div className="col-12">
          <Map mapboxApiAccessToken={mapboxApiAccessToken} />
        </div>
      </div>
    </section>
  );
};

export default Findus;
