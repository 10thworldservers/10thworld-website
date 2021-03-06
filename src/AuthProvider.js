import React, { useState, useEffect } from 'react'
import { PublicClientApplication } from '@azure/msal-browser';
import { config } from './Config';
import styled from 'styled-components';
// Component Composition: this needs to be a wrapper component that we export and wrap other comps with

const AuthProvider = (props) => {
  const [userState, setUserState] = useState({
    error: null,
    isAuthenticated: false,
    user: {}
  });

  const { error, isAuthenticated, user } = userState;

  // Msal object initialized
  const publicClientApplication = new PublicClientApplication({
    auth: {
      clientId: config.appId,
      redirectUri: config.redirectUri
    },
    cache: {
      cacheLocation: 'sessionStorage',
      storeAuthStateInCookie: true
    }
  });
  
  const getUserProfile = async () => {
    try {
      var accessToken = await getAccessToken(config.scopes);

      if (accessToken) {
        setUserState({
          isAuthenticated: true,
          user: {},
          error: {message: 'Access token', debug: accessToken}
        })
      }
    } catch (error) {
      setUserState({
        isAuthenticated: false,
        user: {},
        error: normalizeError(error)
      })
    }
  };

  const login = async () => {
    try {
      await publicClientApplication.loginPopup({
        scopes: config.scopes,
        prompt: 'select_account'
      });

      await getUserProfile();

    } catch (error) {
      setUserState({
        isAuthenticated: false,
        user: {},
        error: this.normalizeError(error)
      })
    }
  };

  const logout = () => {
    publicClientApplication.logout()
  };

  const setErrorMessage = (message, debug) => {
    setUserState({
      error: { message: message, debug: debug }
    })
  };

  const isInteractionRequired = (error) => {
    if (!error.message || error.message.length <= 0) {
      return false;
    }

    return (
      error.message.indexOf('consent_required') > -1 ||
      error.message.indexOf('interaction_required') > -1 ||
      error.message.indexOf('login_required') > -1 ||
      error.message.indexOf('no_account_in_silent_request') > -1
    );
  }

  const getAccessToken = async (scopes) => {
    try {
      const accounts = publicClientApplication.getAllAccounts();

      if (accounts.length <= 0) {
        throw new Error('login_required')
      }

      var silentResult = await publicClientApplication.acquireTokenSilent({
        scopes: scopes,
        account: accounts[0]
      });

      return silentResult.accessToken;
    } catch (error) {
      if (isInteractionRequired(error)) {
        var interactiveResult = await publicClientApplication
          .acquireTokenPopup({ scopes: scopes });
        return interactiveResult.accessToken;
      } else {
        throw error;
      }
    }
  };

  const normalizeError = (error) => {
    var normalizedError = {};

    if (typeof error === 'string') {
      var errParts = error.split('|');
      normalizedError = errParts.length > 1 ? {message: errParts[1], debug: errParts[0]} : {message: error}
    } else {
      normalizedError = {
        message: error.message,
        debug: JSON.stringify(error)
      };
    }
    return normalizedError;
  };

  useEffect(() => {
    const accounts = publicClientApplication.getAllAccounts();

    if (accounts && accounts.length > 0) {
      getUserProfile();
    }

  }, []);
  
  return (
    <Wrapper
      error={error}
      isAuthenticated={isAuthenticated}
      user={user}
      login={ () => login() }
      logout={ () => logout() }
      getAccessToken={ (scopes)=> getAccessToken(scopes) }
      setError={(message, debug) => setErrorMessage(message, debug)}
      {...props}
    >
      {props.children}
    </Wrapper>
  )
}


const Wrapper = styled.div`

`
export default AuthProvider
