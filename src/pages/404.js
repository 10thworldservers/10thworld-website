import React from "react"

import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div style={{display: 'flex', flexDirection: 'column', width: '33%', margin: 'auto'}}>
      <h1 style={{ color: 'white' }}>YA DONE FUCKED UP JIMMY</h1>
      <p style={{ color: 'white' }}>Go Directly to Horny Jail.</p>
      <img width="750" src="https://i.redd.it/cah38y4p41f51.png" alt="hrony jail"></img>
    </div>

  </Layout>
)

export default NotFoundPage
