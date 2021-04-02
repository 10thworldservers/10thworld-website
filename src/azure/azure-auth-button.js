import React, { useContext, useState } from "react";
//import AzureAuthenticationContext from "./azure-authentication-context";
import styled from 'styled-components';
import { AuthContext } from "../context/AuthProvider.js";


//import { useMsal } from "@azure/msal-react";

// Log In, Log Out button
// authenticationModule must be passed in. Can only construct this once on page load.
// This is due to handleResponse, being called more than once. Causes failures.
// see https://github.com/AzureAD/microsoft-authentication-library-for-js/issues/2796

export const AzureAuthButton = ({ text }) => {

  const context = useContext(AuthContext);

  const userAccount = context.getAccount();

  const logIn = () => {
    const typeName = "loginRedirect";

    //setUser
    //authenticationModule.login("loginRedirect", setUser);
    //instance.login()
    context.login(typeName);
  };


  // All Console logs here
  // the Context
  console.warn('CONTEXT FROM AuthContext: ', context);
  console.warn('USERACCOUNT: ', userAccount);

  return (
    <UserLoginButton onClick={() => logIn()}>
      {text}
    </UserLoginButton>
  );

};

export default AzureAuthButton


const UserLoginButton = styled.button`
  font-size: 24px;
  border-radius: 10px;
  padding: 0.65em;
  width: 50%;
  background-color: ${props => props.theme.color.white.regular};
  box-shadow: .1em .1em .3em #000;

  &:hover {
    color: white;
    background-color: #2C2C2C;
    transition: all 0.2s ease-in;
  }
`

