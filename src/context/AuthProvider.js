import React, { createContext, useState } from 'react';
import AzureAuthContext from '../azure/azure-authentication-context';

export const AuthContext = createContext();

export function AuthProvider({children}) {
  
  const [user, setState] = useState();

  const updateUser = ( tokenIn, uniqueIdPass, namePass ) => {
    // SetState in here
    //setState({ token: tokenPass, uniqueId: uniqueIdPass, name: namePass });
    console.log("token:" + tokenIn);
    console.log("uniqueId:" + uniqueIdPass);
    console.log("name:" + namePass);
    setState(namePass);
  };

  const context = new AzureAuthContext(updateUser);

  const value = { context, user };

  return (
    <AuthContext.Provider value={value}>
    {children}
    </AuthContext.Provider>
  )
};


export default AuthProvider;