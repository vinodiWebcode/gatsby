import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from "gatsby"
import "../styles/global.css"

const Footer = () => (
  <section className="second-section" id="footerTopPage">
    <div className="container">
      <div className="row">
        <div className="col-md-4 col-lg-4 col-xl-4">
          <div className="footerText">
            We do what we
            <br /> love, and we love <br />
            what we do.
          </div>
          <div className="footerImg">
            <Link to="#">
              <StaticImage
                className="bottomlogo"
                src="../images/logo-footer.png"
                alt="Logo"
              />
            </Link>
          </div>
        </div>
        <div className="col-md-4 col-lg-4 col-xl-4">
          <div className="officetext">
            <div className="widgetP">Office in New York</div>
          </div>
          <div className="address">
            <div className="textCircle">
              <span> 01.</span>
            </div>
            <span className="textContent">
              {" "}
              <Link to="#" target="_blank" rel="noopener">
                105 Lincoln Avenue <br /> Bronx, NY 10454, USA
              </Link>
            </span>
          </div>
          <div className="address">
            <div className="textCircle">
              <span> 02.</span>
            </div>
            <span className="textContent">
              {" "}
              <Link to="tel:12345678901">+ (123) 124-567-8901</Link> <br />{" "}
              <Link to="tel:12365678901">+ (123) 124-667-8901</Link>
            </span>
          </div>
          <div className="address">
            <div className="textCircle">
              <span> 03.</span>
            </div>
            <span className="textContent">
              {" "}
              <Link to="mailto:webon@example.com">webon@example.com</Link>
              <br />
              <Link to="mailto:webon@example1.com">webon@example1.com</Link>
            </span>
          </div>
        </div>
        <div className="col-md-4 col-lg-4 col-xl-4">
          <div className="newstext">
            <div className="textNews">
              <p>Newsletter</p>
            </div>
            <div className="">
              <div className="">
                <span className="footerStyle">
                  Submit to our newsletter &amp; subscribe to <br />
                  our newsletter to be on the up and up
                </span>
              </div>
            </div>
            <div>
              <span>
                <input
                  type="email"
                  name="your-email"
                  value=""
                  className="inputWidth"
                  aria-required="true"
                  aria-invalid="false"
                  placeholder="mail@address.com"
                />
              </span>
            </div>
            <div className="m-text">
              Subscribe<span> &#8594;</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footerstyle">
      © {new Date().getFullYear()}, Built with
      {` `}
      <Link to="https://www.gatsbyjs.com">Gatsby</Link>
    </div>
  </section>
)
export default Footer
