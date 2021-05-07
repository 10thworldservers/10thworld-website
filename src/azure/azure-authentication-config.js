//The current guidance from B2C is to use b2clogin.com as the authority. For example, $"https://{your-tenant-name}.b2clogin.com/tfp/{your-tenant-ID}/{policyname}"

export const MSAL_CONFIG = {
  auth: {
    clientId: process.env.GATSBY_AD_CLIENT_ID,
    redirectUri: process.env.GATSBY_REDIRECT_URI,
    authority: process.env.GATSBY_AUTHORITY,
    //validateAuthority: false
    //authority: 'https://10thworldservers.b2clogin.com/10thworldservers.onmicrosoft.com/oauth2/v2.0/authorize?p=B2C_1_nicebeaver'

  },
  cache: {
    cacheLocation: "localStorage",
    storeAuthStateInCookie: false,
  }
  
};