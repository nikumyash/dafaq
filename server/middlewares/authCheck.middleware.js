const jwt = require('express-jwt');
const jwks = require('jwks-rsa');

const authCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: process.env.JWKS_URI,
  }),
  audience: 'your-api-audience',
  issuer: process.env.AUTH_DOMAIN,
  algorithms: ['RS256'],
});

module.exports = authCheck;
