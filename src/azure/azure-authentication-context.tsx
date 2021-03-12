import {
  PublicClientApplication,
  AuthenticationResult,
  AccountInfo,
  EndSessionRequest,
  RedirectRequest,
  PopupRequest,
} from "@azure/msal-browser";

import { MSAL_CONFIG } from "./azure-authentication-config";

const location = typeof window !== `undefined` ? window : null;

export class AzureAuthenticationContext {
  private myMSALObj: PublicClientApplication = new PublicClientApplication(
    MSAL_CONFIG
  );
  private account?: AccountInfo;
  private loginRedirectRequest?: RedirectRequest;
  private loginRequest?: PopupRequest;

  public isAuthenticationConfigured = false;

  constructor() {
    // @ts-ignore
    this.account = null;
    this.setRequestObjects();
    if (MSAL_CONFIG?.auth?.clientId) {
      this.isAuthenticationConfigured = true;
    }
  }

  private setRequestObjects(): void {
    this.loginRequest = {
      scopes: [],
      prompt: "select_account",
    };

    this.loginRedirectRequest = {
      ...this.loginRequest,
      redirectStartPage: location,
    };
  }

  login(signInType: string, setUser: any): void {
    if (signInType === "loginPopup") {
      this.myMSALObj
        .loginPopup(this.loginRequest)
        .then((resp: AuthenticationResult) => {
          this.handleResponse(resp, setUser);


        })
        .catch((err) => {
          console.error(err);
        });
    } else if (signInType === "loginRedirect") {
      this.myMSALObj.loginRedirect(this.loginRedirectRequest);
    }
  }

  logout(account: AccountInfo): void {
    const logOutRequest: EndSessionRequest = {
      account,
    };

    this.myMSALObj.logout(logOutRequest);
  }
  handleResponse(response: AuthenticationResult, incomingFunction: any) {
    if(response !==null && response.account !==null) {
      this.account = response.account;
      console.log("10thWorldAcc: ", this.account);
      const accessTokenRequest = {
        scopes: ["user.read"]
    }
       this.myMSALObj.acquireTokenSilent(accessTokenRequest).then((accessTokenResponse) => {
       let accessToken = accessTokenResponse.accessToken;
       console.log('Access token acquired (silent): ', accessToken);
     }).catch(function (error) {
      //Acquire token silent failure, and send an interactive request
      if (error.errorMessage.indexOf("interaction_required") !== -1) {
         this.myMSALObj.acquireTokenPopup(accessTokenRequest).then(function(accessTokenResponse) {
              // Acquire token interactive success
          }).catch(function(error) {
              // Acquire token interactive failure
              console.log(error);
          });
      }
    });
        
    } else {
      this.account = this.getAccount();
    }

    if (this.account) {
      incomingFunction(this.account);
    }
  }
  private getAccount(): AccountInfo | undefined {
    console.log(`loadAuthModule`);
    const currentAccounts = this.myMSALObj.getAllAccounts();
    if (currentAccounts === null) {
      // @ts-ignore
      console.log("No accounts detected");
      return undefined;
    }

    if (currentAccounts.length > 1) {
      // TBD: Add choose account code here
      // @ts-ignore
      console.log(
        "Multiple accounts detected, need to add choose account code."
      );
      return currentAccounts[0];
    } else if (currentAccounts.length === 1) {
      return currentAccounts[0];
    }
  }
}

export default AzureAuthenticationContext;