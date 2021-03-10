import React from "react"
import styled from "styled-components"


import vikingBG from "../../images/vikinglandscape1.jpg"

import { Section, Container } from "../global"

const Features = () => (
  <StyledSection id="features">
    <StyledContainer>
      <Subtitle>Features</Subtitle>
      <SectionTitle>Play with your friends</SectionTitle>
      <FeaturesGrid>
        <FeatureItem>
          <FeatureTitle>Persistent World</FeatureTitle>
          <FeatureText>
            Valheim features an exiting persistent world with a high degree of unpredictability
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Security</FeatureTitle>
          <FeatureText>
            Your data is secured with the reliability of Azure microservices
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Automation</FeatureTitle>
          <FeatureText>
            Uptime is maximized
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Flexibility</FeatureTitle>
          <FeatureText>
            Host up to X-amount of servers per subscription
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Payments</FeatureTitle>
          <FeatureText>Billed monthly, cancel subcription at any time</FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Participate</FeatureTitle>
          <FeatureText>
            Take part in an exciting opportunity to witness the growth of one of the fastest selling early access survival games
          </FeatureText>
        </FeatureItem>
      </FeaturesGrid>
    </StyledContainer>
  </StyledSection>
)

export default Features

const StyledSection = styled(Section)`
  /* background-image: url(${vikingBG});*/
  background-position: center;
  background-repeat: no-repeat;
  /* object-fit: cover; */
  padding: 25px 0;
  margin-bottom: 5rem;
`

const StyledContainer = styled(Container)`
`

const SectionTitle = styled.h3`
  color: ${props => props.theme.color.primary};
  display: flex;
  justify-content: center;
  margin: 0 auto 40px;
  text-align: center;
`

const Subtitle = styled.h5`
  font-size: 16px;
  color: ${props => props.theme.color.primary};
  letter-spacing: 0px;
  margin-bottom: 12px;
  text-align: center;
`

const FeaturesGrid = styled.div`
  max-width: 650px;
  min-width: 450px;
  display: grid;
  grid-template-columns: 200px 200px 200px;
  margin: 0px auto;
  grid-column-gap: 25px;
  grid-row-gap: 15px;
  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
    padding: 0 64px;
  }
`

const FeatureItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 0.75rem 1.5rem;
  border: 1px solid black;
  border-radius: 5px;
  box-shadow: 1px 1px 5px #2c2c2c;
`

const FeatureTitle = styled.h4`
  color: ${props => props.theme.color.primary};
  letter-spacing: 0px;
  line-height: 30px;
  margin-bottom: 10px;
  text-align: center;
`

const FeatureText = styled.p`
  text-align: center;
  font-weight: 600;
`
