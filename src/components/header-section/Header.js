import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"

import { HeaderWrapper } from "./headerWrapper"

import logo from "../../images/logo-2.svg"

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <div className="container-fluid">
      <nav>
        <img src={logo} />
        <ul>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
    </div>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
