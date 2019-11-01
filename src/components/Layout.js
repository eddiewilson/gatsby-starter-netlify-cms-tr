/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import GlobalStyle from "./global.css";
import { Container } from "./layout.css";
//import SmoothScroll from "smooth-scroll";

import Header from "./header";

// import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query MetaQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  //if (typeof window !== "undefined") {
  //  // eslint-disable-next-line global-require
  //  // require("smooth-scroll")('a[href*="#"]')
  //  var scroll = new SmoothScroll('a[href*="#"]', {
  //    speed: 500, // Integer. Amount of time in milliseconds it should take to scroll 1000px
  //    speedAsDuration: false, // If true, use speed as the total duration of the scroll animation
  //    durationMax: null, // Integer. The maximum amount of time the scroll animation should take
  //    durationMin: null, // Integer. The minimum amount of time the scroll animation should take
  //    clip: true, // If true, adjust scroll distance to prevent abrupt stops near the bottom of the page
  //    offset: function(anchor, toggle) {
  //      return 0;
  //    },
  //
  //    // Easing
  //    easing: "easeInOutCubic", // Easing pattern to use
  //    // History
  //    updateURL: true, // Update the URL on scroll
  //    popstate: true, // Animate scrolling with the forward/backward browser buttons (requires updateURL to be true)
  //
  //    // Custom Events
  //    emitEvents: true // Emit custom events
  //  });
  //}

  return (
    <Container>
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </Container>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
