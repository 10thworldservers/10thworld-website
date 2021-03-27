import React, { useState } from 'react'
import Layout from '../../components/common/layout/layout';
import { Navigation } from '../../components/common/navigation/navigation';
import SEO from '../../components/common/layout/seo';
import Footer from "../../components/sections/footer"
import Slider from '../../components/parts/Slider';
import styled from 'styled-components';
import { ScrollProvider } from '../../context/ScrollProvider';
import { HeaderProvider } from '../../context/HeaderProvider.js';

const Faq = () => {



  return (
    <ScrollProvider>
      <HeaderProvider>
      <Layout>
      <SEO title="Faq" />
      <Navigation />
      <FaqContainer>
        <Slider />
      </FaqContainer>
      <Footer />
    </Layout>
      </HeaderProvider>
    </ScrollProvider>
  )
}

const FaqContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 12rem;
  justify-content: center;
`

export default Faq;
