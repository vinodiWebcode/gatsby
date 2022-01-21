import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/global.css"
import Protodesign from "../components/Protodesign"
const Topsection = () => {
  return (
    <div>
      <section className="first-section">
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-lg-5 col-xl-5">
              <div className="rowText">The essentials</div>
              <div className="mytext">
                A modern app for brands that want more.
                <br />
                <button type="button" className="btn btn-dark btn-lg">
                  {" "}
                  View more{" "}
                </button>
              </div>
            </div>

            <div className="col-md-7 col-lg-7 col-xl-7">
              <div className="row adsImg">
                <div className="col-md-6 wow animate__animated animate__bounceInRight animate__slow">
                  <StaticImage
                    className="w-100"
                    src="../images/h1-rev-img1.png"
                    alt="image"
                  />
                </div>
                <div className="col-md-6 wow animate__animated animate__fadeInRight">
                  <StaticImage
                    className="w-100"
                    src="../images/h1-rev-img-2.png"
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container sliderImg">
          <div className="row">
            <div className="slideHeader">
              <span>Esteemed clients </span>
              <h3> Who uses our app </h3>
            </div>
            <div className="col-xl-12">
              <div id="slidy-container">
                <figure id="slidy">
                  <StaticImage
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/eyes.jpg"
                    alt="eyes"
                  />
                  <StaticImage
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/lou.jpg"
                    alt="lou"
                  />
                  <StaticImage
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/lucie-2.jpg"
                    alt="lucie-2"
                  />
                  <StaticImage
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/lucie.jpg"
                    alt="lucie"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
        <section className="designSection">
          <div className="container">
            <div className="row uidesign">
              <div className="col-7 col-md-7">
                <StaticImage
                  className="w-100"
                  src="../images/h1-img1.png"
                  alt="image"
                />
              </div>
              <div className="col-md-5 col-lg-5 col-xl-5">
                <span>02</span>
                <div className="uiuxTitle">UI/UX design </div>
                <div className="uiDiv">
                  <div className="uiinter">Interface </div>
                  <div className="uiDiscription">
                    Aliquam lorem ante, dapibus in, viverra. Phasellus viverra
                    nulla ut metus varius aenean imperdiet iam odio nunc.
                    <div className="readtext">Read More</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Protodesign />
      </section>
    </div>
  )
}

export default Topsection
