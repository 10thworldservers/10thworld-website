import React, { createContext, useState } from 'react';
import AzureAuthContext from '../azure/azure-authentication-context';

export const AuthContext = createContext();

export function AuthProvider({children}) {
  
  const [user, setState] = useState([
    token,
    uniqueId,
    name,
  ]);

  const updateUser = ([ token, uniqueId, name ]) => {
    // SetState in here
    setState([token, uniqueId, name ]);
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