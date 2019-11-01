import PropTypes from "prop-types"
import React from "react"
import Logo from "./logo"
import Nav from "./nav/nav"

const Header = ({ siteTitle }) => (
  <header>
    <section id="one" className="section">
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
              health and well being.
            </p>
          </div>
        </div>
      </div>
    </section>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
