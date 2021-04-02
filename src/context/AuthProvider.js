import React, { createContext, useState } from 'react';
import AzureAuthContext from '../azure/azure-authentication-context';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  
  const [user, setUser] = useState({
      token: "",
      uniqueId: "",
      name: "",
  });

  const updateUser = ( token, uniqueId, name ) => {
    console.group(`VALUES PASSED TO UPDATEUSER: `)
    console.warn('THE TOKEN', token)
    console.warn('THE ID', uniqueId)
    console.warn('THE NAME', name)
    console.groupEnd(`VALUES PASSED TO UPDATEUSER`);
    setUser({token: token, uniqueId: uniqueId, name: name});
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