import React, { useContext, useState } from "react";
import AzureAuthenticationContext from "./azure-authentication-context";
import { AccountInfo } from "@azure/msal-browser";
import styled from 'styled-components';
import { AuthContext } from "../hooks/use-auth.js";




// Log In, Log Out button
export const AzureAuthButton = () => {

    const authenticationModule: AzureAuthenticationContext = new AzureAuthenticationContext();
    const {user, setUser} = useContext(AuthContext);
  
    
  
    const logIn = (): any => {
      const typeName = "loginRedirect";
      //setUser
      console.log("Called logIn");
      authenticationModule.login("loginRedirect", setUser);
      //setUser("John");
  
      // Azure Login
      //authenticationModule.login(typeName, returnedAccountInfo);
    };


    const returnedAccountInfo = (user: AccountInfo) => {
        // set state
        console.log("user:", user);
    };


    return (
    
    <UserLoginButton onClick={() => logIn()}>
        Set User (Current" {user})
    </UserLoginButton>
    );

};

export default AzureAuthButton


const UserLoginButton = styled.button`
  font-size: 24px;
  border-radius: 10px;
  margin: 0 10px;
  padding: 0.65em;
  background-color: ${props => props.theme.color.white.regular};
  box-shadow: .1em .1em .3em #000;

  &:hover {
    color: white;
    background-color: #2C2C2C;
    transition: all 0.2s ease-in;
  }
`

