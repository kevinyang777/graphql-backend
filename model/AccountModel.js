const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const accountModel = new Schema({
  user: { type: String },
  email: { type: String },
  password: { type: String },
  name: { type: String },
});
module.exports = {
  account: mongoose.model("account", accountModel)
};
