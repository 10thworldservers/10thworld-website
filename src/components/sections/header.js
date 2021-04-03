import React, {useContext} from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import SkyBackGround from "../../images/landscape-darkblue-upper-cloud.svg"
import { AuthContext } from '../../context/AuthProvider';
import { Container } from "../global"


// Azure Authentication Button
//import AzureAuthenticationButton from '../../azure/azure-authentication.component';
import { AzureAuthButton } from '../../azure/azure-auth-button.js';



const Header = () => {
  const { user, context } = useContext(AuthContext);
  
  const userAccount = context.getAccount();
  console.log("HEADER USER ACCOUNT :", userAccount);
  if (userAccount !== undefined){
    console.log("HEADER USER NAME FROM ACCOUNT :", userAccount.name);
    console.log("HEADER USER ID FROM ACCOUNT :", userAccount.localAccountId);
    console.log("HEADER USER TOKEN FROM STATE :", user);
  }


  // console.log('THE TOKEN', userAccount.Idtoken)
  // console.log('THE ID', userAccount.uniqueId)
  // console.log('THE NAME', context.name)



  if (userAccount !== undefined) {
    return (
      <HeaderWrapper id="top">
        <Container>
            <HeaderTextGroup>
              <Subtitle>Valheim Servers</Subtitle>
              <h2>
                Welcome to 10th World Servers! <span>{ userAccount.name }</span>
              </h2>                          
            </HeaderTextGroup>
        </Container>
      </HeaderWrapper>
    )
  } else {
    return (
      <HeaderWrapper id="top">
        <Container>
            <HeaderTextGroup>
              <Subtitle>Valheim Servers</Subtitle>
              <h2>
                Sign up to gain access to your own Valheim server and play with up to 10 of your friends.
              </h2>
              <AzureAuthButton text="Sign Up"></AzureAuthButton>                           
            </HeaderTextGroup>
        </Container>
      </HeaderWrapper>
    )
  }


}

export default Header

const HeaderWrapper = styled.header`
  position: relative;
  margin-top: 5rem;
  margin-bottom: 5rem;
  padding: 10rem;
  background-image: url(${SkyBackGround});
  background-repeat: no-repeat;
`
const Subtitle = styled.h5`
  font-size: 16px;
  color: ${props => props.theme.color.primary};
  letter-spacing: 0px;
  margin-bottom: 16px;
`

const HeaderTextGroup = styled.div`
  max-width: 75%;
  position: relative;
  margin: 2.5rem auto;
  padding: 2.5rem;
  box-shadow: inset 300px 300px 300px ${props => props.theme.color.secondary};
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
    text-align: left;
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
