import React from "react"
import styled from "styled-components"
import { useSpring, animated } from 'react-spring';
import { Section, Container } from "../global"

const features = [
  {
    id: 1,
    title: "The Game",
    text: "Valheim features an exciting persistent world that offers an engaging challenge."
  },
  
  {
    id: 2,
    title: "Security",
    text: "Your data and payments are secured with the latest in authentication technology."
  },
  
  {
    id: 3,
    title: "Automation",
    text: "Our servers are automated to maximize both performance and uptime."
  },
  
  {
    id: 4,
    title: "Flexibility",
    text: "Host as many servers as you want, we offer discounts to those who purchase five or more servers"
  },
  
  {
    id: 5,
    title: "Payments",
    text: "Users are billed monthly as part of a subscription plan. Host your own server today for as little as $10 USD a month."
  },
  
  {
    id: 6,
    title: "Join In",
    text: "Take part in an exciting opportunity to witness th growth of one of the fastest selling early access survival RPGs"
  },
]

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1];
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const Features = () => {
  const [props, set] = useSpring(() => ({xys: [0, 0, 1], config: {mass: 10, tension: 350, friction: 40}}))
  return (
    <StyledSection id="features">
    <StyledContainer>
      <Subtitle>At A Glance</Subtitle>
      <SectionTitle>Features</SectionTitle>
      <FeaturesGrid>
          {features.map(item => {
            return (
              <FeatureItem
                key={item.id}
                onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                style={{ transform: props.xys.interpolate(trans) }}>
                <FeatureTitle>{ item.title }</FeatureTitle>
                <FeatureText>{ item.text }</FeatureText>
             </FeatureItem>
           )
         })}
         
      </FeaturesGrid>
    </StyledContainer>
  </StyledSection>
  )
}

export default Features

const StyledSection = styled(Section)`
  background-position: center;
  background-repeat: no-repeat;
  padding: 25px 0;
  margin-bottom: 5rem;
  background-color: ${props => props.theme.color.primary};
`

const StyledContainer = styled(Container)`
`

const SectionTitle = styled.h3`
  color: ${props => props.theme.color.white.regular};
  display: flex;
  justify-content: center;
  margin: 0 auto 40px;
  text-align: center;
`

const Subtitle = styled.h5`
  font-size: 16px;
  color: ${props => props.theme.color.white.lessdark};
  letter-spacing: 0px;
  margin-bottom: 12px;
  text-align: center;
`

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: 300px 300px 300px;
  margin: 0px auto;
  grid-column-gap: 25px;
  grid-row-gap: 15px;
  align-items: vertical;
  justify-content: center;
  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
    padding: 0 64px;
  }
`

const FeatureItem = styled(animated.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1.75rem 1.5rem;
  border: 1px solid black;
  border-radius: 5px;
  box-shadow: 1px 1px 5px ${props => props.theme.color.white.regular};
  background: ${props => props.theme.color.background.white}
`

const FeatureTitle = styled.h4`
  color: ${props => props.theme.color.primary};
  letter-spacing: 0px;
  line-height: 30px;
  margin-bottom: 10px;
  text-align: center;
`

const FeatureText = styled.p`
 font-size: 18px;
  text-align: center;
  font-weight: 600;
  padding: 0.25rem;
`
