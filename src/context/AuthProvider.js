import React, { createContext, useState } from 'react';
import AzureAuthContext from '../azure/azure-authentication-context';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  
  const [user, setUser] = useState();

  const updateUser = ( token ) => {
    setUser(token);
  };
  
  const context = new AzureAuthContext(updateUser);
  const value = { context, user };
 
  console.trace('THE CONTEXT', context);
  return (
    <AuthContext.Provider value={value}>
    {children}
    </AuthContext.Provider>
  )
};


export default AuthProvider;