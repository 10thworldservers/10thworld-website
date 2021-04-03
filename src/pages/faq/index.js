import React from 'react'
import Layout from '../../components/common/layout/layout';
import { Navigation } from '../../components/common/navigation/navigation';
import SEO from '../../components/common/layout/seo';
import Footer from "../../components/sections/footer"
import Slider from '../../components/parts/Slider';
import { ScrollProvider } from '../../context/ScrollProvider';
import { HeaderProvider } from '../../context/HeaderProvider.js';
import { AuthProvider } from '../../context/AuthProvider';
import FaqContainer from './style';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

// needs a sticky footer component
const Faq = () => {
  return (
    <ScrollProvider>
      <HeaderProvider>
        <Layout>
          <AuthProvider>
            <SEO title="Faq" />
            <Navigation />
            <FaqContainer>
              <Slider />
              <ImgContainer>
              <StaticImage
                src="../../images/vikinglandscape1.jpg"
                alt="Viking landscape"
                placeholder="blurred" />
              </ImgContainer>
              
            </FaqContainer>
          </AuthProvider>
          <Footer />
        </Layout>
      </HeaderProvider>
    </ScrollProvider>
  )
};

const ImgContainer = styled.div`
  max-width: 40%;
   img {
    border-radius: 10px !important;
  }

  @media (max-width: ${props => props.theme.screen.xs}) {
    max-width: 75%;
    margin: auto;
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    max-width: 75%;
    margin: auto;
  }
`
export default Faq;
