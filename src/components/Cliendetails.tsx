import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/global.css"

const Clientdetails  = () => (
  <section className="clientSection">
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-lg-12 col-xl-12">
          <div className="subSection">
            <div className="clientDis">
              <h3>
                Our clients describe us as a product team which creates amazing
                UI/UX{" "}
              </h3>
              <p>
                Submit your email address and subscribe to our newsletter to be
                on the up and up.
              </p>
            </div>
            <div>
              <span className="">
                <input
                  type="email"
                  name="your-email"
                  value=""
                  className=""
                  aria-required="true"
                  aria-invalid="false"
                  placeholder="mail@address.com"
                />
              </span>
              <span className="qodef-m-text">Subscribe</span>
              <span> &#8594;</span>
              <div className="imgStyle">
                <StaticImage className="" src="../images/pen.png" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Clientdetails
