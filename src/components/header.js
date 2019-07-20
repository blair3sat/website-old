import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import cn from "classnames"
import { routes } from "../routes"

const Header = ({ siteTitle, location }) => (
  <nav
    className="navbar is-spaced"
    role="navigation"
    aria-label="main navigation"
  >
    <div className="navbar-brand">
      <Link to="/">
        {" "}
        <p className="title">{siteTitle}</p>
      </Link>
    </div>

    <div className="navbar-end">
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          {routes.map((r, i) => (
            <Link
              key={i}
              className={cn(
                "navbar-item",
                location
                  ? location.pathname === r.path
                    ? ["has-text-primary", "is-spaced"]
                    : null
                  : null
              )}
              to={r.path}
            >
              {r.name}
            </Link>
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
