var { expressjwt: jwt } = require("express-jwt");
const jwks = require('jwks-rsa');
// const { auth } = require('express-oauth2-jwt-bearer');

const authCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: process.env.JWKS_URI,
  }),
  audience: process.env.AUDIENCE,
  issuer: process.env.AUTH_DOMAIN,
  algorithms: ['RS256'],
});
// const authCheck = auth({
//   audience: 'this is a random identifier string',
//   issuerBaseURL: 'https://dev-zqgix1fq26ligr5v.us.auth0.com/',
//   tokenSigningAlg: 'RS256'
// });

module.exports = authCheck;