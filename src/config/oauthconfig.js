export const oauthConfig = {
    clientId: process.env.REACT_APP_OAUTH_CLIENT_ID,
    authorizationEndpoint: process.env.REACT_APP_OAUTH_AUTHORIZATION_URL,
    tokenEndpoint: process.env.REACT_APP_OAUTH_TOKEN_URL,
    redirectUri: process.env.REACT_APP_OAUTH_REDIRECT_URI,
    scopes: ['Liferay.Headless.Delivery.everything'],
  };
  