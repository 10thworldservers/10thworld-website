import React, { createContext, useState } from 'react'
import AzureAuthContext from '../azure/azure-authentication-context';

const authMethods = new AzureAuthContext();
export const authContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return <authContext.Provider value={{
    user,
    getUser: () => { 
      console.log("getUser Called");
      setUser(authMethods.getAccount()); 
    }
  }}>
    {children}
  </authContext.Provider>
}

export default ({ element }) => {
  return (
    <AuthProvider>
      {element}
    </AuthProvider>
  )
};