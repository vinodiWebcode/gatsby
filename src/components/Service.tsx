import * as React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/global.css"

const service = () => (
  <section>
    <div className="container">
      <div className="row">
        <div className="col-md-4 col-lg-4 col-xl-4">
          <div className="serTitle">
            We do what we love, and we love what we do.
          </div>
        </div>

        <div className="col-md-4 col-lg-4 col-xl-4">
          <div className="serDiv">
            <div className="serviceNum">01.</div>
            <span className="numqoute"></span>
            <div className="digTitle">Digital strategy</div>
            <div className="digDiscription">
              Etiam ultricies nisi vel augue, varius nuc me laoreet. Phasel
              nulla ornare.{" "}
            </div>
          </div>
          <div className="serDiv">
            <div className="serviceNum">02.</div>
            <span className="numqoute"></span>
            <div className="digTitle">Graphic design </div>
            <div className="digDiscription">
              Duis egestas volutpat turpis sagittis sapien nullam vitae enim et
              rutrum.{" "}
            </div>
          </div>
        </div>

        <div className="col-md-4 col-lg-4 col-xl-4">
          <div className="serDiv">
            <div className="serviceNum">03.</div>
            <span className="numqoute"></span>
            <div className="digTitle">User experience</div>
            <div className="digDiscription">
              Praesent eleifend lorem dolor libero suscipit in consequat amet
              dictum.{" "}
            </div>
          </div>
          <div className="serDiv">
            <div className="serviceNum">04.</div>
            <span className="numqoute"></span>
            <div className="digTitle">Web development </div>
            <div className="digDiscription">
              Donec tempus suscipit arcu, dolor aliquam posuere dolor consequat.
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default service
