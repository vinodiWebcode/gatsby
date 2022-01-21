import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/global.css"

const Developing = () => (
  <section className="bottom-section">
    <div className="container">
      <div className="row">
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
                src="../images/image-4.png"
                alt="image"
              />
            </div>
          </div>
        </div>

        <div className="col-md-5 col-lg-5 col-xl-5">
          <div className="uiPropTitle">
            <span>05.</span>
            <div className="uiuxTitle"> Developing </div>
            <div className="uiDiv">
              <div className="uiinter">Coding</div>
              <div className="protoDiscription">
                Nullam euismod dolor risus, tempus
                <br /> dolor suscipit nulla facilisi gravida
                <br /> laoreet ante morbi porttitor id.
                <div className="readtext">
                  Read More <span> &#8594;</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Developing
