import PropTypes from "prop-types";
import React from "react";
import Logo from "./logo";
import Nav from "./nav/nav";
import styled from "styled-components";
import MEDIA from "../utils/mediaTemplates";

const Section = styled.section`
  animation: AnimationName 30s ease infinite;
  @keyframes AnimationName {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  color: white;
  padding-top: 4rem;
  padding-bottom: 4rem;
  background: radial-gradient(#2ab8b8, #229393);
  top: 0;
  ${MEDIA.PHONE`
  padding: 2rem 0;
  `}
`;

const Header = ({ siteTitle }) => (
  <header>
    <Section className="section">
      <div className="container">
        <header className="grid header">
          <div className="col-2_sm-4 logo" data-push-right="off-2_sm-4">
            <Logo />
          </div>
        </header>
        <Nav />
        <div className="grid-bottom">
          <div className="col-6_sm-12" data-push-right="off-6_sm-0">
            <h1>
              Welcome to <br />
              The Therapy Room
            </h1>
          </div>
          <div className="col-5_sm-12">
            <p>
              We provide a range of complementary therapies to help improve your
              health and well being. Located in the heart of Bodmin, Cornwall.
            </p>
          </div>
        </div>
      </div>
    </Section>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
