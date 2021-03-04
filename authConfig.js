// below should probably be stored as environment variables (process.env)

const msalConfig = {
  auth: {
    clientId: "8d5f94b9-9901-4f53-8d36-e6548603beef",
    authority: "https://login.microsoftonline.com/ed90146a-8d6a-4307-9347-9131e3191908",
    redirectUri: "https://jwt.ms",
  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateCookie: false,
  }
};

const loginRequest = {
  scopes: ["openid", "profile", "User.Read"]
};

const tokenRequest = {
  scopes: ["User.Read", "Mail.Read"]
};