import React, { createContext } from 'react';
//import AzureAuthContext from '../azure/azure-authentication-context';

//const authMethods = new AzureAuthContext();
export const AuthContext = createContext({
  user: "null",
  setUser: () => {}
});

export default AuthContext

// export const AuthProvider = ({ children }) => {
//   //const [user, setUser] = useState(null);
//   return <authContext.Provider value={{
//     user: "null",
//     setUser: () => { 
//       console.log("setUser Called");
//       //setUser(authMethods.returnedAccountInfo()); 
//     }
//   }}>
//     {children}
//   </authContext.Provider>
// }

// export default ({ element }) => {
//   return (
//     <AuthProvider>
//       {element}
//     </AuthProvider>
//   )
// };