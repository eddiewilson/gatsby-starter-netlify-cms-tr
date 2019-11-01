import React, { useState } from "react"
import { Link } from "gatsby"
import { Nav } from "./nav.css"

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  //Menu.handleClickOutside = () => setIsOpen(false)

  return (
    <Nav>
      <button className={isOpen ? "-active" : ""} onClick={toggle}></button>
      <div className={isOpen ? "col-8_sm-12 nav -active" : " col-8_sm-12 nav "}>
        <ul className="grid-center">
          <li id="nav1" className="col-auto">
            <Link onClick={toggle} to="/#one">
              Home
            </Link>
          </li>
          <li id="nav2" className="col-auto">
            <Link onClick={toggle} to="/#two">
              Find Us
            </Link>
          </li>
          <li id="nav3" className="col-auto">
            <Link onClick={toggle} to="/#three">
              Meet The Team
            </Link>
          </li>
          <li id="nav4" className="col-auto">
            <Link onClick={toggle} to="/#four">
              Calendar
            </Link>
          </li>
          <li id="nav5" className="col-auto">
            <Link onClick={toggle} to="/#five">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </Nav>
  )
}

export default Menu
