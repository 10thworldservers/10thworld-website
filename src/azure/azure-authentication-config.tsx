import { Configuration, LogLevel } from "@azure/msal-browser";

//testApp
//const AzureActiveDirectoryAppClientId: string = '97e55fe7-ef1a-4892-ae76-59eba5fa4837';
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
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: false,
  },
  system: {
    loggerOptions: {
      loggerCallback: (level, message, containsPii) => {
        if (containsPii) {
          return;
        }
        switch (level) {
          case LogLevel.Error:
            console.error(message);
            return;
          case LogLevel.Info:
            console.info(message);
            return;
          case LogLevel.Verbose:
            console.debug(message);
            return;
          case LogLevel.Warning:
            console.warn(message);
            return;
        }
      },
    },
  },
};