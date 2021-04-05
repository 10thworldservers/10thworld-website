import React from 'react';
import Layout from '../../components/common/layout/layout';
import { Navigation } from '../../components/common/navigation/navigation';
import SEO from '../../components/common/layout/seo';
import Footer from "../../components/sections/footer"
import { Container } from '../../components/global';
import { ScrollProvider } from '../../context/ScrollProvider';
import { HeaderProvider } from '../../context/HeaderProvider';
import { AuthProvider } from '../../context/AuthProvider';
import { InstContainer, InstTitle, InstText } from './style';

const Connect = () => {
  return (
    <ScrollProvider>
      <HeaderProvider>
        <Layout>
          <AuthProvider>
            <SEO title="About" />
            <Navigation />
            <Container>
              <InstContainer>
                <InstTitle>
                  Instructions
        </InstTitle>
                <InstText>
                
                </InstText>
                <InstText>

                </InstText>
                <InstText>

                </InstText>
              </InstContainer>
            </Container>
            <Footer />
          </AuthProvider>
        </Layout>
      </HeaderProvider>
    </ScrollProvider>

  )
}



export default Connect;
