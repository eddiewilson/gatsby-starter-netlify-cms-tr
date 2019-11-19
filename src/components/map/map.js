import React from "react";
import { GeolocateControl, Marker, StaticMap } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import styled from "styled-components";

export const Pin = styled.div`
  width: 20px;
  height: 20px;
  background-color: #339999;
  border-radius: 1000px;
  border: 3px solid white;
  box-shadow: 0px 0px 15px 5px rgba(1, 1, 1, 0.2);
`;

export const InfoWindow = styled.div`
  background-color: white;
  padding: 2rem;
  position: absolute;
  width: 236px;
  top: -290px;
  left: -110px;
  border-radius: 18px;
  &:after {
    content: "";
    position: absolute;
    width: 16px;
    height: 16px;
    background-color: white;
    transform: translateX(-50%) rotate(45deg);
    bottom: -9px;
    left: 50%;
  }
`;

const Map = (props) => {
  const viewport = {
    width: "100%",
    height: 500,
    latitude: 50.471689,
    longitude: -4.718734,
    zoom: 16,
    center: [-4.718734, 50.471689],
    scrollZoom: false,
    dragPan: false,
    dragRotate: false,
    touchZoom: false,
    pitch: 40,
    bearing: 20,
    antialias: true
  };

  const geolocateStyle = {
    float: "left",
    margin: "50px",
    padding: "10px"
  };
  return (
    <StaticMap
      {...viewport}
      mapboxApiAccessToken={props.mapboxApiAccessToken}
      height={800}
      latitude={50.471689}
      longitude={-4.718734}
      zoom={15}
    >
      <GeolocateControl
        style={geolocateStyle}
        positionOptions={{ enableHighAccuracy: true }}
        trackUserLocation={true}
      />

      <Marker
        latitude={50.471689}
        longitude={-4.718734}
        offsetLeft={-20}
        offsetTop={-10}
      >
        <InfoWindow>
          <ul>
            <li>The Therapy Room</li>
            <li>1 The Piazza</li>
            <li>Crockwell Street</li>
            <li>Bodmin</li>
            <li>Cornwall</li>
            <li>PL31 2DR</li>
          </ul>
        </InfoWindow>
        <Pin />
      </Marker>
    </StaticMap>
  );
};

export default Map;
