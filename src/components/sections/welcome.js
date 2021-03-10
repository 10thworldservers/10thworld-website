import React from "react"
import styled from "styled-components"


import { Section, Container } from "../global"

const Welcome = () => (
  <StyledSection id="welcome">
    <StyledContainer>
      <Subtitle>Welcome!</Subtitle>
      <SectionTitle>Welcome to 10th World Servers! Start your adventure today!</SectionTitle>
    </StyledContainer>
  </StyledSection>
)

export default Welcome

const StyledSection = styled(Section)`
  background-position: center;
  background-repeat: no-repeat;
  /* object-fit: cover; */
  padding: 25px 0;
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
