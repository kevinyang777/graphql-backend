const { account } = require("../model/AccountModel");
const debug = require("debug")("accountController");

const isUserExist = async user => {
  const error = await account.findOne({
    user
  })
  debug("user exist",error)
  if(error === null) return false
  return true
}

const createAccount = async data => {
  debug("create account ", data);
  const { user, email, password, name } = data;
  if(await isUserExist(user)) throw new Error("User already Exist")
  await account.create({
    user,
    email,
    password,
    name
  });
  return { user, email, password, name };
};

const deleteAccount = async data => {
  debug("delete account", data);
  const { email } = data;
  const error = await account.findOneAndRemove({
    email
  });
  debug("error ", error);
  if (error === null) throw new Error("Already Deleted");
  return { email };
};

const accountList = async data => {
  debug("listing account");
  const accountsData = await account.find();
  return accountsData;
};

const login = async data => {
  debug("login ", data);
  const { user, password } = data;
  let userData = await account
    .findOne({
      user,
      password
    })
    .lean();
  debug("user data ", userData);
  if (userData === null) throw new Error("Wrong Username or Password");
  userData.token = "1234abc";
  return userData;
};

module.exports = {
  createAccount,
  deleteAccount,
  login,
  accountList
};
