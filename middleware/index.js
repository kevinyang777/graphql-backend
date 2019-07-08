const { isTokenValid } = require("./loginMiddleware");

const permissions = {
  Query: {
    Accounts: isTokenValid
  }
};

module.exports = {
  permissions
};
