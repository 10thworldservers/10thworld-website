import React from 'react'
import Layout from '../../components/common/layout/layout';
import { Navigation } from '../../components/common/navigation/navigation';
import SEO from '../../components/common/layout/seo';
import Footer from "../../components/sections/footer"
import Slider from '../../components/parts/Slider';
import { ScrollProvider } from '../../context/ScrollProvider';
import { HeaderProvider } from '../../context/HeaderProvider.js';
import { AuthProvider } from '../../context/AuthProvider';
import  FaqContainer from './style';
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
            </FaqContainer>
          </AuthProvider>
          <Footer />
        </Layout>
      </HeaderProvider>
    </ScrollProvider>
  )
};



export default Faq;
