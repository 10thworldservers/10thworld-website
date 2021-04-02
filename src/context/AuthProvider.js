import React, { createContext, useState } from 'react';
import AzureAuthContext from '../azure/azure-authentication-context';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  
  const [user, setUser] = useState({
      token: "",
      uniqueId: "",
      name: "",
  });
  
  const context = new AzureAuthContext(updateUser);
  const value = { context, user };

  const updateUser = ( token, uniqueId, name ) => {
    console.group(`VALUES PASSED TO UPDATEUSER: `)
    console.warn('THE TOKEN', token)
    console.warn('THE ID', uniqueId)
    console.warn('THE NAME', name)
    console.groupEnd();
    setUser({token: token, uniqueId: uniqueId, name: name});
  };

  return (
    <AuthContext.Provider value={value}>
    {children}
    </AuthContext.Provider>
  )
};


export default AuthProvider;