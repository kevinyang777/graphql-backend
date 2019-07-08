const code = "supersecret";
const isTokenValid = async (resolve, parent, args, ctx, info) => {
  // Include your agent code as Authorization: <token> header.
  const permit = ctx.request.get("Authorization") === code;
  if (!permit) {
    throw new Error(`Not authorised!`);
  }
  return resolve();
};

module.exports = {
  isTokenValid
};
