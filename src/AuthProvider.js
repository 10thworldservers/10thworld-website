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

  useEffect(() => {
    const accounts = publicClientApplication.getAllAccounts();

    if (accounts && accounts.length > 0) {
      this.getUserProfile();
    }

  }, []);

  const login = async () => {
    try {
      await publicClientApplication.loginPopup({
        scopes: config.scopes,
        prompt: 'select_account'
      });

      await this.getUserProfile();

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
      
    }
  }

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

  return (
    <Wrapper
      error={error}
      isAuthenticated={isAuthenticated}
      user={user}
      login={ () => login() }
      logout={ () => logout() }
      getAccessToken={ }
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
