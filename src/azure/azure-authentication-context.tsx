import {
  PublicClientApplication,
  AuthenticationResult,
  AccountInfo,
  EndSessionRequest,
  RedirectRequest,
  PopupRequest,
} from "@azure/msal-browser"
import { MSAL_CONFIG } from "./azure-authentication-config"
import { createNewUser } from "../endpoints/user.js"

export class AzureAuthenticationContext {
  private myMSALObj: PublicClientApplication = new PublicClientApplication(
    MSAL_CONFIG
  );
  private account?: AccountInfo;
  public uniqueId?: any;
  public idToken?: any;
  private loginRequest: PopupRequest;
  private loginRequestRedirect: RedirectRequest;

  public isAuthenticationConfigured = false

  constructor(setUser: any) {
    // @ts-ignore
    this.account = null
    this.setRequestObjects()
    if (MSAL_CONFIG?.auth?.clientId) {
      this.isAuthenticationConfigured = true
    }

    // Redirect: once login is successful and redirects with tokens, call Graph API
    this.myMSALObj
      .handleRedirectPromise()
      .then((resp: AuthenticationResult) => {
        this.handleResp(resp, setUser)
      })
      .catch((err) => {
        console.log("CAUGHT ERROR ON handleRedirectPromise")
        console.error(err)
      })
  }

  private setRequestObjects(): void {
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
  login(signInType: string, setUser: any): void {
    if (signInType === "loginPopup") {
      this.myMSALObj
        .loginPopup(this.loginRequest)
        .then((resp: AuthenticationResult) => {
          this.handleResp(resp, setUser)
        })
        .catch((err) => {
          console.error(err)
        })
    } else if (signInType === "loginRedirect") {
      this.myMSALObj.loginRedirect(this.loginRequestRedirect)
    }
  }

   logout(account: AccountInfo): void {
    const logOutRequest: EndSessionRequest = {
      account,
    }

    this.myMSALObj.logout(logOutRequest)
  }

  async msalAcquireToken(incFn: any): Promise<any> {
    let MSAL: any = this.myMSALObj;
    const accessTokenRequest: any = {
      scopes: [],
      authority: MSAL_CONFIG.auth.authority,
      account: this.account
    }
    try {
      let acquireToken = await MSAL.acquireTokenSilent(accessTokenRequest).then((accessTokenResponse: any) => {
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
  async handleResp(response: AuthenticationResult, incomingFunction: any): Promise<any> {
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
  
  getAccount(): AccountInfo | undefined {
    const currentAccounts = this.myMSALObj.getAllAccounts()
    if (currentAccounts === null || currentAccounts.length === 0) {
      //this.getTokenSilent();
      // @ts-ignore
      return undefined
    }

    if (currentAccounts.length > 1) {
      // TBD: Add choose account code here
      // @ts-ignore
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
