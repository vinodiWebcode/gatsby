import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from "gatsby"
import "../styles/global.css"

interface HeaderProps {
  siteTitle: string
}

const Header = ({}: HeaderProps) => {
  return (
    <div>
      <header>
        <h3>hello</h3>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/page-2/">
              <StaticImage
                src="../images/logo-dark-img-1.png"
                className="logo"
                alt="Logo"
              />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <span className="navSpan">01</span>
                  <Link
                    className="nav-link active navli"
                    aria-current="page"
                    to="/page-2/"
                  >
                    Home
                    <ul className="dropdown">
                      <li>
                        <Link to="#">Laptops</Link>
                      </li>
                      <li>
                        <Link to="#">Monitors</Link>
                      </li>
                      <li>
                        <Link to="#">Printers</Link>
                      </li>
                    </ul>
                  </Link>
                </li>
                <li className="nav-item">
                  <span className="navSpan">02</span>
                  <Link
                    className="nav-link active navli"
                    aria-current="page"
                    to="/page-2.js/"
                  >
                    Pages
                  </Link>
                </li>
                <li className="nav-item">
                  <span className="navSpan">03</span>
                  <Link
                    className="nav-link active navli"
                    aria-current="page"
                    to="/page-2/"
                  >
                    Portfolio
                  </Link>
                </li>
                <li className="nav-item">
                  <span className="navSpan">04</span>
                  <Link
                    className="nav-link active navli"
                    aria-current="page"
                    to="/page-2.js/"
                  >
                    Blog
                  </Link>
                </li>
                <li className="nav-item">
                  <span className="navSpan">05</span>
                  <Link
                    className="nav-link active navli"
                    aria-current="page"
                    to="/404.js/"
                  >
                    Shop
                  </Link>
                </li>
              </ul>
              <div className="d-flex">
                <div className="search">
                  {" "}
                  <StaticImage src="../images/search.svg" alt="icon" />{" "}
                  <span className="search-text">Search</span>
                </div>
                <div className="cart">Cart (0)</div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Header
