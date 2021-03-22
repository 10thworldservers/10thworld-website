import React, { createContext } from 'react';
import AzureAuthContext from '../azure/azure-authentication-context';

//const azureAuthContext = new AzureAuthContext();
const context = new AzureAuthContext();


export const AuthContext = createContext();

export function AuthProvider({children}) {
  //const [context, setContext] = useState();
  

  const value = {context}

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>

   
}

// export const AuthContext = createContext({
//   user: "null",
//   setUser: () => {}
// });



export default AuthProvider

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