const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type GetMessage {
      message: String
      firstName: String
  }

  type User {
      name: String
  }

  type Book {
      author: String
  }

  type Query {
      getMessage: GetMessage
      getUser: User 
      getBook: Book
  } 


`

const resolvers = {
    Query: {
      getMessage: () => {return {message: "Hello world",firstName:"daniyal"}},
      getUser: () => { return {name: "daniyal"}},
      getBook: () => {return {author: "Usuf"}}
    },
  };





// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Serversss ready at ${url}`);
});