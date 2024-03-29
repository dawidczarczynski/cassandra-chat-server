import { ApolloServer } from 'apollo-server';
import { typeDefs } from './graphql/typeDefs';
import { resolvers } from './graphql/resolvers';

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server
  .listen()
  .then(({ url, subscriptionsUrl }) => {
    console.log(`Server runs at ${url}`);
    console.log(`Subscriptions runs at ${subscriptionsUrl}`);
  });
