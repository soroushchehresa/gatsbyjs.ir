/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={() => (
      <>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
            marginTop: 50,
          }}
        >
          <main>{children}</main>
          <footer style={{ position: "absolute", bottom: 20 }}>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a target="_blank" href="https://www.gatsbyjs.org">Gatsby</a>
            {` `}|{` `}
            Hosted on
            {` `}
            <a target="_blank" href="https://www.github.com">GitHub</a>
            {` `}|{` `}
            By
            {` `}
            <a target="_blank" href="https://github.com/soroushchehresa">Soroush Chehresa</a>
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
