const {
  createAccount,
  deleteAccount,
  login,
  accountList
} = require("../controller/accountController");

const resolvers = {
  Query: {
    hello: () => "Hello World",
    Accounts: async (_, data) => await accountList(data)
  },
  Mutation: {
    createAccount: async (_, data) => await createAccount(data),
    deleteAccount: async (_, data) => await deleteAccount(data),
    login: async (_, data) => await login(data)
  }
};

module.exports = {
  resolvers
};
