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

const Intro = styled.div`
  h1 {
    transform: translateY(5px);
    transition: all 0.2s ease-in-out 0.2s;
    opacity: 0;
    &.loaded {
      opacity: 1;
      transform: translateY(0px);
    }
  }
  p.animate {
    transform: translateY(5px);
    transition: all 0.2s ease-in-out 0.4s;
    opacity: 0;
    &.loaded {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`;

//const animateIntro = () => {
//  document.getElementById("intro").classList.add("loaded");
//};

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
        <Intro className="grid-bottom">
          <div className="col-6_sm-12" data-push-right="off-6_sm-0">
            <h1 className="animate">
              Welcome to <br />
              The Therapy Room
            </h1>
          </div>
          <div className="col-5_sm-12">
            <p className="animate">
              We provide a range of complementary therapies to help improve your
              health and well being. Located in the heart of Bodmin, Cornwall.
            </p>
          </div>
        </Intro>
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
