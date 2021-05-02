/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

//Trying to move the authprovider in here never seems to work.
import React from 'react';
import {AuthProvider} from './src/context/AuthProvider';
 
export const wrapRootElement = ({ element }) => {
  return (
    <AuthProvider>
      {element}
     </AuthProvider>
   )
 };