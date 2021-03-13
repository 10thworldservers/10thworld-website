import React from 'react'
import Layout from '../../components/common/layout/layout';
import {Navigation} from '../../components/common/navigation/navigation';
import SEO from '../../components/common/layout/seo';
import Footer from "../../components/sections/footer"


const Features = () => {
  return (
    <Layout>
      <SEO title="Features" />
      <Navigation />
      <h1>The Features Page</h1>
      <Footer />
    </Layout>
  )
}

export default Features
