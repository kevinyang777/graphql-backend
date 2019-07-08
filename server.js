const { GraphQLServer } = require("graphql-yoga");
const { resolvers } = require("./resolver/resolver");
const { permissions } = require("./middleware");
const mongoose = require("mongoose");
const connectionString =
  "mongodb+srv://kevin:kevin@cluster0-abqyg.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(connectionString, { useNewUrlParser: true });

const server = new GraphQLServer({
  typeDefs: "./schema.graphql",
  resolvers,
  context: req => ({ ...req }),
  middlewares: [permissions]
});
server.start(() => console.log("Server is running on localhost:4000"));
