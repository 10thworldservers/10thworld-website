/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React from 'react';
import {AuthProvider} from './src/context/AuthProvider';
 
export const wrapRootElement = ({ element }) => {
  return (
    <AuthProvider>
      {element}
     </AuthProvider>
   )
 };