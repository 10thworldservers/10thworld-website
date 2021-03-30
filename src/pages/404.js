import React from "react"
import Layout from "../components/common/layout/layout";
import SEO from "../components/common/layout/seo";
import { Link } from 'gatsby';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div style={{display: 'flex', flexDirection: 'column', width: '33%', margin: 'auto'}}>
      <h1 style={{ color: 'white' }}>It seems we've hit a snag</h1>
      <Link to="/" style={{color: 'white', fontSize: '18px'}}>Return Home</Link>
    </div>

  </Layout>
)

export default NotFoundPage
