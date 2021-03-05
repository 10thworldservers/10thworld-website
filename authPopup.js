// All these could be methods on a login component or contained within a functional login component

// Ideally we take a functional approach as it is much clearer to deal with using hooks

// instance of microsoft's authentication object
// Possible to use this within a react component?
const myMSALObj = new msal.PublicClientApplication(msalConfig);

// the value of the username - empty string sent to the API that checks whether it exists against any other account names
let username = "";

// method or function contained within Login component
function loadPage() {
  const currentAccounts = myMSALObj.getAllAccounts();
  if (currentAccounts === null) {
    return;
  } else if (currentAccounts.length > 1) {
    // For loop for account selection
    for (let account in currentAccounts) {
      username = currentAccounts[account].username
    }
    console.warn("Multiple Accounts Detected!")
  } else if (currentAccounts.length === 1) {
    username = currentAccounts[0].username;
    showWelcomeMessage(currentAccounts[0]);
  }
};

function handleResponse(resp) {
  if (resp !== null) {
    username = resp.account.username;
    showWelcomeMessage(resp.account);
  } else {
    loadPage();
  }
};

function signIn() {
  myMSALObj.loginPopup(loginRequest)
    .then(handleResponse)
    .catch(error => {
    console.log(error(error));
  });
};

function signOut() {
  const logoutRequest = {
    account: myMSALObj.getAccountByUsername(username)
  };
  myMSALObj.logout(logoutRequest);
};

function getTokenPopup() {
  request.account = myMSALObj.getAcocuntByUsername(username);
  return myMSALObj.acquireTokenSilent(request).catch(error => {
    console.warn("silent token acquisition fails. acquiring token using redirect lol microsoft")
    if (error instanceof msal.InteractionRequiredAuthError) {
      return myMSALObj.acquireTokenPopup(request)
        .then(tokenResponse => {
          console.log(tokenResponse);

          return tokenResponse;
        })
        .catch(error => {
          console.error(error)
        });
        
    } else {
      console.warn(error);
    }
  });
};

function seeProfile() {
  getTokenPopup(loginRequest)
    .then(response => {
      callMSGraph(graphConfig.graphMeEndpoint, response.accessToken, upDateUI)
  })
    .catch(error => {
    console.error(error)
  })
};

function readMail() {

};

loadPage();