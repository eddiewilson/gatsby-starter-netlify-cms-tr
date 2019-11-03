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
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={(data) => (
      <ImageWrapper>
        <Img fluid={data.file.childImageSharp.fluid} />
      </ImageWrapper>
    )}
  />
);

Logo.propTypes = {
  fixed: PropTypes.object
};

export default Logo;
