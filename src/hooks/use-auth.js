import React, { createContext, useState } from 'react';
import AzureAuthContext from '../azure/azure-authentication-context';

//const azureAuthContext = new AzureAuthContext();

export const AuthContext = createContext();

export function AuthProvider({children}) {
  
  const [user, setState] = useState({
    token: null,
    uniqueId: null,
    name: null,
  });

  const context = new AzureAuthContext(updateUser);

  const updateUser = ({token, uniqueId, name}) => {
    // SetState in here
    setState({ token: token, uniqueId: uniqueId, name: name });
  };

  const value = { context, user };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>

};


export default AuthProvider;