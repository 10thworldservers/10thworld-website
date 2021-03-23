import React, {useContext} from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import SkyBackGround from "../../images/landscape-darkblue-upper-cloud.svg"
import { AuthContext } from '../../hooks/use-auth';

import { Container } from "../global"

// Azure Authentication Button
//import AzureAuthenticationButton from '../../azure/azure-authentication.component';
import { AzureAuthButton } from '../../azure/azure-auth-button.js';



const Header = () => {
  const {context, user} = useContext(AuthContext);
  
  const userAccount = context.getAccount();
  console.log("Header User Account:", userAccount);
  console.log("Header User Account from state:", user);



  if (userAccount !== undefined) {
    return (
      <HeaderWrapper id="top">
        <Container>
          <Flex>
            <HeaderTextGroup>
              <Subtitle>Valheim Servers</Subtitle>
              <h2>
                Welcome to 10th World Servers! {user}
              </h2>                          
            </HeaderTextGroup>
          </Flex>
        </Container>
      </HeaderWrapper>
    )
  } else {
    return (
      <HeaderWrapper id="top">
        <Container>
          <Flex>
            <HeaderTextGroup>
              <Subtitle>Valheim Servers</Subtitle>
              <h2>
                Sign up to gain access to your own Valheim server and play with up to 10 of your friends.
              </h2>
              <AzureAuthButton text="Sign Up"></AzureAuthButton>                           
            </HeaderTextGroup>
          </Flex>
        </Container>
      </HeaderWrapper>
    )
  }


}

export default Header

const HeaderWrapper = styled.header`
  margin-top: 20rem;
  margin-bottom: 5rem;
  padding: 10rem;
  background-image: url(${SkyBackGround});
  box-shadow: inset 0 0 0 2000px rgba(235, 242, 250, 0.3);
`
const Subtitle = styled.h5`
  font-size: 16px;
  color: ${props => props.theme.color.primary};
  letter-spacing: 0px;
  margin-bottom: 16px;
`

const HeaderTextGroup = styled.div`
  margin: 2.5rem;
  padding: 1.5rem;
  box-shadow: inset 300px 300px 300px rgba(245, 242, 240, 0.8);
  border-radius: 10px;
  > div {
    width: 120%;
    margin-bottom: -9.5%;

    @media (max-width: ${props => props.theme.screen.md}) {
      margin: 0 16px;
    }
  }

  h1 {
    margin: 0 0 24px;
    color: ${props => props.theme.color.primary};
  }

  h2 {
    margin-bottom: 24px;
    ${props => props.theme.font_size.regular}
  }

  p {
    margin-bottom: 48px;
  }
`

const Flex = styled.div`
  display: grid;
  justify-content: space-between;
  align-content: center;
  grid-template-columns: 1fr 1fr;
  grid-gap: 80px;
  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 64px;
  }
`
const ImageWrapper = styled.div`
  justify-self: end;
  align-self: center;
  @media (max-width: ${props => props.theme.screen.md}) {
    justify-self: center;
  }
`

const StyledImage = styled(Img)`
  width: 500px;
  @media (max-width: ${props => props.theme.screen.md}) {
    width: 400px;
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    width: 300px;
    display: none;
  }
`
