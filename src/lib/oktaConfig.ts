
export const oktaConfig = {
    clientId: '0oa8x9xylpUmGfRqK5d7',
    issuer: 'https://dev-28096334.okta.com/oauth2/default',
    redirectUri: 'https://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHtpsCheck: true,
}