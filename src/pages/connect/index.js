import React from 'react';
import Layout from '../../components/common/layout/layout';
import { Navigation } from '../../components/common/navigation/navigation';
import SEO from '../../components/common/layout/seo';
import Footer from "../../components/sections/footer"
import { ScrollProvider } from '../../context/ScrollProvider';
import { HeaderProvider } from '../../context/HeaderProvider';
import { useHeaderContext } from '../../context/HeaderProvider';
import { AuthProvider } from '../../context/AuthProvider';
import {
  InstContainer,
  InstTitle,
  InstText,
  InstFlexWrapper,
  ImageWrapper,
  FlexContainer,
  EmailUs,
  EmailContainer,
  EmailTitle
} from './style';
import { StaticImage } from 'gatsby-plugin-image';

const Connect = () => {
  const { isVisible } = useHeaderContext();

  return (
    <ScrollProvider>
      <HeaderProvider>
        <Layout>
          <AuthProvider>
            <SEO title="About" />
            <Navigation />
            <FlexContainer>
              <InstContainer>
                <InstTitle>
                  How to Connect
              </InstTitle>
                <InstFlexWrapper isVisible={isVisible}>
                  <InstText>
                    Get started by creating an account with us at 10th World Servers.
                    Once signed up or signed in you can subscribe.
                </InstText>
                  <ImageWrapper>
                    <StaticImage src='../../images/landscape-darkblue-lower.svg' alt="Blue landscape lower" />
                  </ImageWrapper>

                </InstFlexWrapper>
                <InstFlexWrapper>
                  <InstText>
                    Clicking Get Access will give the option to subscribe to our server plan.
                    You'll be redirected to Stripe to complete the transcation.
                    Once payment completes we'll redirect you back here to see your server details.
                </InstText>
                  <ImageWrapper>
                    <StaticImage src='../../images/landscape-darkblue-upper.png' alt="Blue mountain landscape" />
                  </ImageWrapper>
                </InstFlexWrapper>
                <InstFlexWrapper>
                  <InstText>
                    Servers are pre-configured and linked instantly to your account.
                    You'll receive a domain name, and port number for your Valheim server.
                    After subscribing you'll be up and running instantly!
                </InstText>
                  <ImageWrapper>
                    <StaticImage src='../../images/mountain-and-sea-4770131_1920.jpg' alt="Mountains and sea" />
                  </ImageWrapper>
                </InstFlexWrapper>
                <InstFlexWrapper>
                  <InstText>
                    We manage our servers with containers and kubernetes for maximum uptime and durability.
                    You can control your server through our dashboard,
                    see and set your default password,
                    and upload your personal world file. Save and backup your world here too.
                    For support email us directly at 10thworldsupport@gmail.com
                </InstText>
                  <ImageWrapper>
                    <StaticImage src='../../images/landscape-darkblue-upper-cloud.svg' alt="Server with cloud background" />
                  </ImageWrapper>
                </InstFlexWrapper>
              </InstContainer>
              <EmailContainer>
                <EmailTitle>Email Us Directly At:</EmailTitle>
                <EmailUs>10thworldservers@gmail.com</EmailUs>
              </EmailContainer>

            </FlexContainer>
            <Footer />
          </AuthProvider>
        </Layout>
      </HeaderProvider>
    </ScrollProvider>

  )
}



export default Connect;
