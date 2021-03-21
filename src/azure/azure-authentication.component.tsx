// import React, { useContext, useDebugValue, useState } from "react";
// import AzureAuthenticationContext from "./azure-authentication-context";
// import { AccountInfo } from "@azure/msal-browser";
// import styled from 'styled-components';
// import { AuthContext } from "../hooks/use-auth.js";

// /////////////////////////////////////////
// //
// //
// //
// // NOT CURRENTLY USED
// // DEPRECATED BY azure-auth-button.js
// //
// //
// //
// //////////////////////////////////////////








// const checkIfWindowExists = () => {
//   let isIE: any;
//   let ua: any;
//   let msie: any;
//   let msie11: any;

//   if (window !== undefined) {
//     ua = window.navigator.userAgent;
//     msie = ua.indexOf("MSIE ");
//     msie11 = ua.indexOf("Trident/");
//     isIE = msie > 0 || msie11 > 0;
//   }
  
//   return isIE;
// }



// // Log In, Log Out button
// const AzureAuthenticationButton = ({ onAuthenticated, text }: any): JSX.Element => {
//   // Azure client context
//   const authenticationModule: AzureAuthenticationContext = new AzureAuthenticationContext();

//   const [authenticated, setAuthenticated] = useState<Boolean>(false);
//   const [user, setUser] = useState<AccountInfo>();
//   const authContext = useContext(AuthContext);
  

//   const logIn = (method: string): any => {
//     const typeName = "loginRedirect";
//     const logInType = checkIfWindowExists() ? "loginRedirect" : typeName;

//     // Azure Login
//     authenticationModule.login(logInType, returnedAccountInfo);
//   };
//   const logOut = (): any => {
//     if (user) {
//       onAuthenticated= undefined;
//       // Azure Logout
//       authenticationModule.logout(user);
//     }
//   };

//   const returnedAccountInfo = (user: AccountInfo) => {
//     // set state
//     setAuthenticated(user?.name ? true : false);
//     onAuthenticated = user;
//     setUser(user);
//   };

//   const showLogInButton = (): any => {
//     return (
//       //<LoginButton onClick={() => logIn("loginPopup")}>
//         <LoginButton onClick={() => logIn("loginRedirect")}>
//         {text}
//       </LoginButton>
//     );
//   };

//   const showLogOutButton = (): any => {
//     return (
//       <div id="authenticationButtonDiv">
//         <div id="authentication">
//           <button id="authenticationButton" onClick={() => logOut()}>
//             Log out
//           </button>
//         </div>
//       </div>
//     );
//   };

//   const showButton = (): any => {
//     return authenticated ? showLogOutButton() : showLogInButton();
//   };

//   return (
//     <div>
//       {authenticationModule.isAuthenticationConfigured ? (
//         showButton()
//       ) : (
//         <div>Authentication Client ID is not configured.</div>
//       )}
//     </div>
//   );
// };

// const LoginButton = styled.button`
//   font-size: 24px;
//   border-radius: 10px;
//   margin: 0 10px;
//   padding: 0.65em;
//   background-color: ${props => props.theme.color.white.regular};
//   box-shadow: .1em .1em .3em #000;

//   &:hover {
//     color: white;
//     background-color: #2C2C2C;
//     transition: all 0.2s ease-in;
//   }
// `

// export default AzureAuthenticationButton;