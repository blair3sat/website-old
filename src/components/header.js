import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import cn from "classnames"
import { routes } from "../routes"

import styles from "./nav-brand.module.scss"

const RouteLink = ({ r, current }) => (
  <Link
    className={cn(
      "navbar-item",
      current ? ["has-text-primary", "is-spaced"] : null
    )}
    to={r.path}
  >
    {current ? <strong>{r.name}</strong> : r.name}
  </Link>
)

console.log(styles.navBrand)

const Header = ({ siteTitle, location }) => (
  <nav
    className="navbar is-spaced"
    role="navigation"
    aria-label="main navigation"
  >
    <div className={cn("navbar-brand", styles.navBrand)}>
      <Link to="/">
        <img alt="" src="/images/logo.png"></img>
        <p className="title">{siteTitle}</p>
      </Link>
    </div>

    <div className="navbar-end">
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          {routes.map((r, i) => (
            <RouteLink
              r={r}
              key={i}
              current={location ? location.pathname === r.path : false}
            ></RouteLink>
          ))}
        </div>
      </div>
    </div>
  </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
