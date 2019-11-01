import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { ImageWrapper } from "./logo.css";
import PropTypes from "prop-types";

const Logo = () => (
  <StaticQuery
    query={graphql`
      query LogoQuery {
        file(name: { eq: "logo" }) {
          publicURL
          id
          childImageSharp {
            fixed(width: 100, height: 50) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={(data) => (
      <ImageWrapper>
        <Img fixed={data.file.childImageSharp.fixed} />
      </ImageWrapper>
    )}
  />
);

Logo.propTypes = {
  fixed: PropTypes.object
};

export default Logo;
