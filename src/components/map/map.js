import React from "react";
// import MapGL, { GeolocateControl, Marker } from "react-map-gl";
// import "mapbox-gl/dist/mapbox-gl.css";
// import styled from "styled-components";
//
// export const Pin = styled.div`
//   width: 20px;
//   height: 20px;
//   background-color: #339999;
//   border-radius: 1000px;
//   border: 3px solid white;
//   box-shadow: 0px 0px 15px 5px rgba(1, 1, 1, 0.2);
// `;
//
// const geolocateStyle = {
//   float: "left",
//   margin: "50px",
//   padding: "10px"
// };
//
// const Map = (props) => {
//   const [viewport, setViewPort] = useState({
//     width: "100%",
//     height: 500,
//     latitude: 50.471689,
//     longitude: -4.718734,
//     zoom: 16,
//     center: [-4.718734, 50.471689],
//     scrollZoom: false,
//     dragPan: false,
//     dragRotate: false,
//     touchZoom: false,
//     pitch: 40,
//     bearing: 20,
//     antialias: true
//   });
//
//   //const marker = new mapboxgl.Marker({
//   //  color: "#339999",
//   //})
//   //  .setLngLat([-4.718734, 50.471689])
//   //  .addTo(map)
//
//   const _onViewportChange = (viewport) =>
//     setViewPort({ ...viewport, transitionDuration: 3000 });
//
//   return (
//     <div style={{ margin: "0 auto", zIndex: "1" }}>
//       <MapGL
//         {...viewport}
//         mapboxApiAccessToken={props.mapboxApiAccessToken}
//         mapStyle="mapbox://styles/therapyroombodmin/ck2f6uha91xf41cmlg3ucyxdv"
//         onViewportChange={_onViewportChange}
//       >
//         <GeolocateControl
//           style={geolocateStyle}
//           positionOptions={{ enableHighAccuracy: true }}
//           trackUserLocation={true}
//         />
//         <Marker
//           latitude={50.471689}
//           longitude={-4.718734}
//           offsetLeft={-20}
//           offsetTop={-10}
//         >
//           <Pin />
//         </Marker>
//       </MapGL>
//     </div>
//   );
// };
//
// export default Map;

import { StaticMap } from "react-map-gl";

const Map = (...props) => (
  <StaticMap
    mapboxApiAccessToken={props.mapboxApiAccessToken}
    width={400}
    height={400}
    latitude={37.7577}
    longitude={-122.4376}
    zoom={8}
  />
);

export default Map;
