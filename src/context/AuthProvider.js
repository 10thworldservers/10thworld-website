import React, { createContext, useState, useEffect } from 'react';
import AzureAuthContext from '../azure/azure-authentication-context';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  
  const [user, setUser] = useState();

  const updateUser = ( accInfo ) => {
    setUser(accInfo);
  };

  // we need useEffect here to prevent additional re-renders
  useEffect(() => {
    
  }, []);
  
  const context = new AzureAuthContext(updateUser);
  const value = { context, user };
  console.log(user);
  return (
    <AuthContext.Provider value={value}>
    {children}
    </AuthContext.Provider>
  )
};


export default AuthProvider;