import React from "react"
import styled from "styled-components"

import { Section, Container } from "../global"

const Features = () => (
  <Section id="features">
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
            Take part in an exciting opportunity to witness the growth of one of the fastest selling early access survival game
          </FeatureText>
        </FeatureItem>
      </FeaturesGrid>
    </StyledContainer>
  </Section>
)

export default Features

const StyledContainer = styled(Container)``

const SectionTitle = styled.h3`
  color: ${props => props.theme.color.primary};
  display: flex;
  justify-content: center;
  margin: 0 auto 40px;
  text-align: center;
`

const Subtitle = styled.h5`
  font-size: 16px;
  color: ${props => props.theme.color.accent};
  letter-spacing: 0px;
  margin-bottom: 12px;
  text-align: center;
`

const FeaturesGrid = styled.div`
  max-width: 670px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0px auto;
  grid-column-gap: 40px;
  grid-row-gap: 35px;
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
`

const FeatureTitle = styled.h4`
  color: ${props => props.theme.color.primary};
  letter-spacing: 0px;
  line-height: 30px;
  margin-bottom: 10px;
`

const FeatureText = styled.p`
  text-align: center;
`
