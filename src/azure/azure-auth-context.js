import React from "react";
import { MsalProvider } from "@azure/msal-react";
import { Configuration,  PublicClientApplication } from "@azure/msal-browser";

import { MSAL_CONFIG } from "./azure-authentication-config";

const pca = new PublicClientApplication(MSAL_CONFIG);