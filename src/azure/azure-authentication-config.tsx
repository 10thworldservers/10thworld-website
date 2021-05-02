import { Configuration, LogLevel } from "@azure/msal-browser";

//testApp
//const AzureActiveDirectoryAppClientId: string = see .env;
//10thWorldServers

const AzureActiveDirectoryAppClientId: string = '7b9232dc-de44-48d6-b490-6a557913ecd2';

//The current guidance from B2C is to use b2clogin.com as the authority. For example, $"https://{your-tenant-name}.b2clogin.com/tfp/{your-tenant-ID}/{policyname}"


export const MSAL_CONFIG: Configuration = {
  auth: {
    clientId: AzureActiveDirectoryAppClientId,
    redirectUri: 'https://victorious-forest-0f1514b10.azurestaticapps.net',
    authority: 'https://10thworldservers.b2clogin.com/tfp/10thworldservers.onmicrosoft.com/b2c_1_nicebeaver/'
    //validateAuthority: false
    //authority: 'https://10thworldservers.b2clogin.com/10thworldservers.onmicrosoft.com/oauth2/v2.0/authorize?p=B2C_1_nicebeaver'

  },
  cache: {
    cacheLocation: "localStorage",
    storeAuthStateInCookie: false,
  }
  
};