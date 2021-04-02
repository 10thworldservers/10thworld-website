import React, { createContext, useState } from 'react';
import AzureAuthContext from '../azure/azure-authentication-context';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  
  // const [user, setUser] = useState({
  //   userState: {
  //     token: "",
  //     uniqueId: "",
  //     name: "",
  //   }
  // });

  const [user, setUser] = useState();

  const updateUser = ( tokenIn, uniqueIdPass, namePass ) => {
    // setUser in here
    //setUser({ token: tokenPass, uniqueId: uniqueIdPass, name: namePass });
    console.log("token:" + tokenIn);
    console.log("uniqueId:" + uniqueIdPass);
    console.log("name:" + namePass);
    setUser(namePass);
  };

  const context = new AzureAuthContext(setUser);

  const value = { context, user };

  return (
    <AuthContext.Provider value={value}>
    {children}
    </AuthContext.Provider>
  )
};


export default AuthProvider;