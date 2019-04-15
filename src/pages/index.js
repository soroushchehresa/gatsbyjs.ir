import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Gatsbyjs.ir</h1>
    <p>We are coming soon :)</p>
  </Layout>
)

export default IndexPage
