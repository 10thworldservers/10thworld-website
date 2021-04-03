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
const location = typeof window !== `undefined` ? window : null

// None of these methods on the Class are asynchronous

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

  ///
  // Called by Login to handle response.
  ///
  handleResponse(response: AuthenticationResult, incomingFunction: any) {
    // do I call the function in here?
    // if check for user existence
    if (response !== null && response.account !== null && response.account) {
      this.account = response.account;
      this.idToken = response.idToken;
      this.uniqueId = response.uniqueId;
      console.log("10thWorld AuthResult: ", response);

      const accessTokenRequest: any = {
        scopes: [],
        authority: MSAL_CONFIG.auth.authority,
        account: this.account,
      }
      
      this.myMSALObj
      .acquireTokenSilent(accessTokenRequest)
      .then((accessTokenResponse) => {
        //let accessToken = accessTokenResponse.accessToken
        this.idToken = accessTokenResponse.idToken
        //Check returned claims to see if this is the user's first sign-in
        //Then call CreateUpdateUser to duplicate User from B2C into CosmosDB
        if (this.account.idTokenClaims["newUser"]) {
          console.log('the value from idTokenClaims', this.account.idTokenClaims["newUser"]);
          createNewUser(this.account.localAccountId, this.account.name, this.account.username);
        }
        incomingFunction(this.idToken, this.account.localAccountId, this.account.name);
      })
      .catch(function (error) {
        //Acquire token silent error, log it
        console.log(error)
      })


    } else {
      this.account = this.getAccount()
    }

    if (this.account) {
      if (response === null) {
        const accessTokenRequest: any = {
          scopes: [],
          authority: MSAL_CONFIG.auth.authority,
          account: this.account
        }
  
        this.myMSALObj
        .acquireTokenSilent(accessTokenRequest)
        .then((accessTokenResponse) => {
          //let accessToken = accessTokenResponse.accessToken
          this.idToken = accessTokenResponse.idToken
          //Check returned claims to see if this is the user's first sign-in
          //Then call CreateUpdateUser to duplicate User from B2C into CosmosDB
          if (this.account.idTokenClaims["newUser"]){
            console.log('the value from idTokenClaims', this.account.idTokenClaims["newUser"]);
            createNewUser(this.account.localAccountId, this.account.name, this.account.username);
          }
          
          // incomingFunction({
          //   userState: {
          //     token: this.idToken,
          //     uniqueId: this.uniqueId,
          //     name: this.account.name,
          //   }
          // });
          incomingFunction(this.idToken, this.account.localAccountId, this.account.name);


        })
        .catch(function (error) {
          //Acquire token silent error, log it
          console.log(error)
        })
      }
      
    }
    console.warn(`%c THE ACCOUNT: `,'font-weight: bold; font-size: 24px; color: yellow', this.account);
  }

  async handleResp(response: AuthenticationResult, incomingFunction: any): Promise<any> {
    try {
      if (response !== null && response.account !== null && response.account) {
        this.account = response.account;
        this.idToken = response.idToken;
        this.uniqueId = response.uniqueId;
  
        const accessTokenRequest: any = {
          scopes: [],
          authority: MSAL_CONFIG.auth.authority,
          account: this.account,
        }

        let MSAL = this.myMSALObj;
        let acquireToken = await MSAL.acquireTokenSilent(accessTokenRequest).then((accessTokenResponse) => {
          this.idToken = accessTokenResponse.idToken
          if (this.account.idTokenClaims["newUser"]) {
            console.log('%c VALUE FROM IDTOKENCLAIMS: ', 'font-size: 18px; color: green; font-weight: bold', this.account.idTokenClaims["newUser"]);
            createNewUser(this.account.localAccountId, this.account.name, this.account.username);
          }
          incomingFunction(this.idToken, this.account.localAccountId, this.account.name)
        });
        return acquireToken;
      } else {
        this.account = this.getAccount()
      };

      if (this.account) {
        if (response === null) {
          const accessTokenRequest: any = {
            scopes: [],
            authority: MSAL_CONFIG.auth.authority,
            account: this.account,
          }
          let MSAL = this.myMSALObj;
          let acquireToken = await MSAL.acquireTokenSilent(accessTokenRequest).then((accessTokenResponse) => {
          this.idToken = accessTokenResponse.idToken
          if (this.account.idTokenClaims["newUser"]) {
            console.log('%c VALUE FROM IDTOKENCLAIMS: ', 'font-size: 18px; color: green; font-weight: bold', this.account.idTokenClaims["newUser"]);
            createNewUser(this.account.localAccountId, this.account.name, this.account.username);
          }
          incomingFunction(this.idToken, this.account.localAccountId, this.account.name)
        });
        return acquireToken;
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
      console.log('%c No Accounts Detected',"font-weight: bold; font-size: 18px; color: red")
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
      console.log('%c MSAL OBJ','font-weight: bold; font-size: 24px; color: orange', this.myMSALObj)
      return currentAccounts[0]
    }
  }
}

export default AzureAuthenticationContext
