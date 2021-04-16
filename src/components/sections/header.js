import React, {useContext} from "react"
import styled from "styled-components"
import SkyBackGround from "../../images/landscape-darkblue-upper-cloud.svg"
import { AuthContext } from '../../context/AuthProvider';
import { Container } from "../global"


// Azure Authentication Button
//import AzureAuthenticationButton from '../../azure/azure-authentication.component';
import { AzureAuthButton } from '../../azure/azure-auth-button.js';



const Header = () => {
  const { user, context } = useContext(AuthContext);
  
  const userAccount = context.getAccount();

  if (userAccount !== undefined){
    context.getAccount();
  }

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
              <AzureAuthButton text="Sign Up" userAction="loginRedirect"></AzureAuthButton>                           
            </HeaderTextGroup>
            </Container>        
      </HeaderWrapper>
    )
  }


}

export default Header

const HeaderWrapper = styled.header`
  position: relative;
  margin-top: 6.5rem;
  padding: 2.5rem;
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
  max-width: 100%;
  position: relative;
  margin: 5rem auto;
  padding: 2.5rem;
  box-shadow: inset 300px 300px 300px ${props => props.theme.color.secondary};
  border-radius: 10px;
  > div {
    width: 120%;
    margin-bottom: -9.5%;
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
