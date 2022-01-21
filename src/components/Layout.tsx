/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./Header"
import Price from "./Price"
import Cliendetails from "./Cliendetails"
import Footer from "./Footer"
import Developing from "./Developing"
import Service from "./Service"
import Topsection from "./Topsection"

const Layout: React.FC = ({ children }) => {
  const data: any = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const siteTitle: string = data.site.siteMetadata?.title || `Title`

  return (
    <>
      <Header siteTitle={siteTitle} />
      <div>
        <Topsection />
        <Service />
        <Developing />
        <Cliendetails />
        <Price />
        <Footer />
      </div>
      {children}
    </>
  )
}

export default Layout
