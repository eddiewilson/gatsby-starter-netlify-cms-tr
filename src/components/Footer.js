import React from "react"
import { Link } from "gatsby"

const Footer = () => (
  <div id="five">
    <div className="container foot">
      <div className="grid">
        <div className="col-12_sm-12">
          <h2>Contact Us</h2>
        </div>
      </div>
    </div>
    <div className="container foot">
      <div className="grid">
        <div className="col-3_sm-12">
          <div className="address">
            <h4>Address</h4>
            <ul>
              <li>The Therapy Room</li>
              <li>1 The Piazza</li>
              <li>Crockwell Street</li>
              <li>Bodmin</li>
              <li>Cornwall</li>
              <li>PL31 2DR</li>
            </ul>
          </div>
        </div>
        <div className="col-3_sm-12 hours">
          <h4>Hours</h4>
          <ul>
            <li>
              Mon:
              <span>9am-5pm</span>
            </li>
            <li>
              Tues:
              <span>9am-5pm</span>
            </li>
            <li>
              Wed:
              <span>9am-5pm</span>
            </li>
            <li>
              Thur:
              <span>9am-5pm</span>
            </li>
            <li>
              Fri:
              <span>9am-5pm</span>
            </li>
            <li>
              Sat:
              <span>Closed</span>
            </li>
            <li>
              Sun:
              <span>Closed</span>
            </li>
          </ul>
        </div>
        <div className="col-3_sm-12">
          <h4>Phone/Email</h4>
          <ul>
            <li>01208 760 09</li>
          </ul>
          <Link to="mailto:thetherapyroombodmin@gmail.com">
            thetherapyroombodmin@gmail.com
          </Link>
          <div id="footer_social">
            <h4>Social</h4>
            <ul>
              <li>
                <Link to="http://www.facebook.com/pages/The-therapy-room/183139525066263">
                  Facebook
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Footer
