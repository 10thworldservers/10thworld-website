import React from 'react'
import Layout from '../../components/common/layout/layout';
import {Navigation} from '../../components/common/navigation/navigation';
import SEO from '../../components/common/layout/seo';
import Footer from "../../components/sections/footer"
import styled from 'styled-components';
import { ScrollProvider } from '../../context/ScrollProvider';
import { HeaderProvider } from '../../context/HeaderProvider.js';
const features = [1,2,3]

const Faq= () => {
  return (
    <ScrollProvider>
      <HeaderProvider>
      <Layout>
      <SEO title="Features" />
      <Navigation />
      <FeatureContainer>
        {features.map(item => {
          return (
            <FeatureCard key={item}>
              
          </FeatureCard>
        )
      })}
      </FeatureContainer>
      <Footer />
    </Layout>
      </HeaderProvider>
    </ScrollProvider>
  )
}

const FeatureContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 12rem;
  justify-content: center;
`

const FeatureCard = styled.div`
  width: 350px;
  height: 360px;
  margin: 0.5rem;
  border: 1px solid white;
  border-radius: 10px;
  color: white;
  margin-bottom: 2rem;
  background-color: hsl(0, 0%, 23%);
  box-shadow: 1px 1px 5px hsl(0, 0%, 23%);
`
export default Faq;
