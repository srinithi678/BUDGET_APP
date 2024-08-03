const jwt = require("express-jwt");
const jwks = require("jwks-rsa");
const { AUTH0_DOMAIN, AUTH0_AUDIENCE } = process.env;

const authorizeAccessToken = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `${AUTH0_DOMAIN}.well-known/jwks.json`,
  }),
  audience: AUTH0_AUDIENCE,
  issuer: AUTH0_DOMAIN,
  algorithms: ["RS256"],
});

module.exports = authorizeAccessToken;
