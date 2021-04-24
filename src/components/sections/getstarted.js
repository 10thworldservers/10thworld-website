import React from "react"
import styled from "styled-components"
import SkyBackGround from "../../images/landscape-darkblue-lower.svg"
import { Container, Section } from "../global"

const GetStarted = () => (
  <StyledSection>
    <GetStartedContainer>
      <GetStartedTitle>Be the first to create your world</GetStartedTitle>
    </GetStartedContainer>
  </StyledSection>
)

export default GetStarted

const StyledSection = styled(Section)`
  clip-path: polygon(0 0, 100% 14%, 100% 100%, 0% 100%);
  background-image: url(${SkyBackGround});
`;

const GetStartedContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 0 40px;
`;

const GetStartedTitle = styled.h3`
  margin: 0 auto 32px;
  text-align: center;
`;
