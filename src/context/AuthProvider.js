import React, { createContext, useState } from 'react';
import AzureAuthContext from '../azure/azure-authentication-context';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  
  const [user, setUser] = useState();

  const updateUser = ( token, uniqueId, name ) => {
    console.log(`VALUES PASSED TO UPDATEUSER: `)
    console.log('THE TOKEN', token)
    console.log('THE ID', uniqueId)
    console.log('THE NAME', name)
    setUser(token);
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