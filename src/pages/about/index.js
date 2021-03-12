import React from 'react';
import styled from 'styled-components';
import Layout from '../../components/common/layout/layout';
import Navigation from '../../components/common/navigation/navigation';
import SEO from '../../components/common/layout/seo';

const About = () => {
  return (
    <Layout>
      <SEO title="About" />
      <Navigation />
      <h1>The About Page</h1>
      <Section />
    </Layout>
  )
}
const Section = styled.section`

`
export default About
