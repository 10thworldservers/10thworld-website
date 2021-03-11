import React, { useContext, createContext } from 'react'
import AzureAuthContext from '../azure/azure-authentication-context';


const authMethods = new AzureAuthContext();
const authContext = createContext();

export const ProvideAuth = ({ children }) => {
  const auth = authMethods.getAccount();

  return <authContext.Provider value={auth}>{ children }</authContext.Provider>
}

export const useAuth = () => {
  return useContext(authContext);
}

// function useProvideAuth() {
//   const [user, setUser] = useState(null);


//   useEffect(() => {
//     const unsubscribe = authMethods.getAccount(account => {
//       if (account) {
//         setUser(account);
//       } else {
//         setUser(false);
//       }
//     })
//     return () => unsubscribe();
//   }, []);

//   return {
//     user
//   }
// }

export default ({ element }) => (
  <ProvideAuth>
    {element}
  </ProvideAuth>
)