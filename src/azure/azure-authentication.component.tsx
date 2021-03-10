import React, { useState } from "react";
import AzureAuthenticationContext from "./azure-authentication-context";
import { AccountInfo } from "@azure/msal-browser";
import styled from 'styled-components';


const checkIfWindowExists = () => {
  let isIE: any;
  let ua: any;
  let msie: any;
  let msie11: any;

  if (window !== undefined) {
    ua = window.navigator.userAgent;
    msie = ua.indexOf("MSIE ");
    msie11 = ua.indexOf("Trident/");
    isIE = msie > 0 || msie11 > 0;
  }
  
  return isIE;
}



// Log In, Log Out button
const AzureAuthenticationButton = ({ onAuthenticated, text }: any): JSX.Element => {
  // Azure client context
  const authenticationModule: AzureAuthenticationContext = new AzureAuthenticationContext();

  const [authenticated, setAuthenticated] = useState<Boolean>(false);
  const [user, setUser] = useState<AccountInfo>();

  const logIn = (method: string): any => {
    const typeName = "loginPopup";
    const logInType = checkIfWindowExists() ? "loginRedirect" : typeName;

    // Azure Login
    authenticationModule.login(logInType, returnedAccountInfo);
  };
  const logOut = (): any => {
    if (user) {
      onAuthenticated(undefined);
      // Azure Logout
      authenticationModule.logout(user);
    }
  };

  const returnedAccountInfo = (user: AccountInfo) => {
    // set state
    setAuthenticated(user?.name ? true : false);
    onAuthenticated(user);
    setUser(user);
  };

  const showLogInButton = (): any => {
    return (
      <LoginButton onClick={() => logIn("loginPopup")}>
        {text}
      </LoginButton>
    );
  };

  const showLogOutButton = (): any => {
    return (
      <div id="authenticationButtonDiv">
        <div id="authentication">
          <button id="authenticationButton" onClick={() => logOut()}>
            Log out
          </button>
        </div>
      </div>
    );
  };

  const showButton = (): any => {
    return authenticated ? showLogOutButton() : showLogInButton();
  };

  return (
    <div>
      {authenticationModule.isAuthenticationConfigured ? (
        showButton()
      ) : (
        <div>Authentication Client ID is not configured.</div>
      )}
    </div>
  );
};

const LoginButton = styled.button`
  font-size: 24px;
  border-radius: 10px;
 
`

export default AzureAuthenticationButton;