import * as React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from "gatsby"
import "../styles/global.css"

const price = () => (
  <section>
    <div className="container">
      <div className="row">
        <div className="col-md-4 col-lg-4 col-xl-4 wrapperDiv">
          <div className="mWrapper">
            <div className="titleWrapper">
              <div className="mTagline">
                <p>License</p>
              </div>
              <div className="mTitle">
                <p>Essential</p>
              </div>
            </div>
            <div className="price">
              <div className="priceWrapper">
                <span className="priceCurrency">$</span>
                <span className="priceValue">16</span>
              </div>
            </div>
          </div>
          <div className="mMontent">
            <ul>
              <li>Web &amp; Mobile</li>
              <li>Free Custom Domain</li>
              <li>Best Hosting Ever</li>
            </ul>
          </div>
          <div className="m-button">
            <Link
              className="animation-out"
              to="https://webon.qodeinteractive.com/pricing-plans/"
              target="_self"
            >
              {" "}
              <span className="mtext">Purchase Now</span>
              <span> &#8594;</span>
            </Link>{" "}
          </div>
        </div>

        <div className="col-md-4 col-lg-4 col-xl-4 wrapperDiv">
          <div className="mWrapper">
            <div className="titleWrapper">
              <div className="mTagline">
                <p>License</p>
              </div>
              <div className="mTitle">
                <p>Premium</p>
              </div>
            </div>
            <div className="price">
              <div className="priceWrapper">
                <span className="priceCurrency">$</span>
                <span className="priceValue">32</span>
              </div>
            </div>
          </div>
          <div className="mMontent">
            <ul>
              <li>Web &amp; Mobile</li>
              <li>Free Custom Domain</li>
              <li>Best Hosting Ever</li>
              <li>Outstanding Support</li>
            </ul>
          </div>
          <div className="m-button">
            <Link
              className="animation-out"
              to="https://webon.qodeinteractive.com/pricing-plans/"
              target="_self"
            >
              {" "}
              <span className="mtext">Purchase Now</span>
              <span> &#8594;</span>
            </Link>{" "}
          </div>
        </div>

        <div className="col-md-4 col-lg-4 col-xl-4 wrapperDiv">
          <div className="mWrapper">
            <div className="titleWrapper">
              <div className="mTagline">
                <p>License</p>
              </div>
              <div className="mTitle">
                <p>Standard</p>
              </div>
            </div>
            <div className="price">
              <div className="priceWrapper">
                <span className="priceCurrency">$</span>
                <span className="priceValue">64</span>
              </div>
            </div>
          </div>
          <div className="mMontent">
            <ul>
              <li>Web &amp; Mobile</li>
              <li>Free Custom Domain</li>
              <li>Best Hosting Ever</li>
              <li>Outstanding Support</li>
              <li>Web Design</li>
            </ul>
          </div>
          <div className="m-button">
            <Link
              className="animation-out"
              to="https://webon.qodeinteractive.com/pricing-plans/"
              target="_self"
            >
              {" "}
              <span className="mtext">Purchase Now</span>
              <span> &#8594;</span>
            </Link>{" "}
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default price
