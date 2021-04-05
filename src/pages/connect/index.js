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
                Get started by creating an account with us at 10th World Servers. 
                Once signed up or signed in you can subscribe.
                </InstText>
                
                <InstText>
                Select Get Access to subscribe to our server plan.
                Get Access will redirect to Stripe to complete payment. 
                Once payment completes we'll redirect you back here to see your server details.
                </InstText>
                <InstText>
                Servers are pre-configured and linked instantly to your account. 
                You'll receive a domain name, and port number for your Valheim server. 
                After subscribing you'll be up and running instantly!
                </InstText>
                <InstText>
                We manage our servers with containers and kubernetes to maintain maximum uptime and durability.
                You can control your server through our dashboard. 
                See and set your default password.
                Upload your personal world file. Save and backup your world here too.
                Additional functionality is being added to the Dashboard for more personal control. 
                For support email us directly at 10thworldsupport@gmail.com
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
