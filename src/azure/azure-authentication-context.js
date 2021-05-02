import {
  PublicClientApplication,
} from "@azure/msal-browser"
import { MSAL_CONFIG } from "./azure-authentication-config"
import { createNewUser } from "../endpoints/user.js"

export class AzureAuthenticationContext {
  constructor(setUser) {
    this.account = null
    this.myMSALObj = new PublicClientApplication(MSAL_CONFIG);
    this.isAuthenticationConfigured = false;
    this.setRequestObjects()
    if (MSAL_CONFIG?.auth?.clientId) {
      this.isAuthenticationConfigured = true
    }

    // Redirect: once login is successful and redirects with tokens, call Graph API
    this.myMSALObj
      .handleRedirectPromise()
      .then((resp) => {
        this.handleResp(resp, setUser)
      })
      .catch((err) => {
        console.log("CAUGHT ERROR ON handleRedirectPromise")
        console.error(err)
      })
  }

  setRequestObjects() {
    this.loginRequest = {
      scopes: [],
      prompt: "select_account",
    }

    this.loginRequestRedirect = {
      scopes: [],
    }
  }

  ///
  // Called by Auth Button Component, Handles Signup as well as login
  ///
  login(signInType, setUser) {
    if (signInType === "loginPopup") {
      this.myMSALObj
        .loginPopup(this.loginRequest)
        .then((resp) => {
          this.handleResp(resp, setUser)
        })
        .catch((err) => {
          console.error(err)
        })
    } else if (signInType === "loginRedirect") {
      this.myMSALObj.loginRedirect(this.loginRequestRedirect)
    }
  }

   logout(account){
    const logOutRequest = {
      account,
    }

    this.myMSALObj.logout(logOutRequest)
  }

  async msalAcquireToken(incFn){
    let MSAL = this.myMSALObj;
    const accessTokenRequest = {
      scopes: [],
      authority: MSAL_CONFIG.auth.authority,
      account: this.account
    }
    try {
      let acquireToken = await MSAL.acquireTokenSilent(accessTokenRequest).then((accessTokenResponse) => {
        this.idToken = accessTokenResponse.idToken;
        // possible bug with this, we need the value from newUser not whether it is there
        if (this.account.idTokenClaims.hasOwnProperty("newUser")) {
          createNewUser(this.account.localAccountId, this.account.name, this.account.username);
        }
        incFn(this.idToken, this.account.localAccountId, this.account.name);
      })
      return acquireToken;
    } catch (error) {
     console.error(error) 
    }
  };

  // Re-vamped handleResponse as async function
  async handleResp(response, incomingFunction) {
    try {
      if (response !== null && response.account !== null && response.account) {
        this.account = response.account;
        this.idToken = response.idToken;
        this.uniqueId = response.uniqueId;
        this.msalAcquireToken(incomingFunction);
      } else {
        this.account = this.getAccount()
      };

      if (this.account) {
        if (response === null) {
          this.msalAcquireToken(incomingFunction);
        }
      };

    } catch (error) {
      console.error(error);
    }
  }
  
  getAccount() {
    const currentAccounts = this.myMSALObj.getAllAccounts()
    if (currentAccounts === null || currentAccounts.length === 0) {
      return undefined
    }

    if (currentAccounts.length > 1) {
      console.log(
        "Multiple accounts detected, need to add choose account code."
      )
      return currentAccounts[0]
    } else if (currentAccounts.length === 1) {
      return currentAccounts[0]
    }
  }
}

export default AzureAuthenticationContext
