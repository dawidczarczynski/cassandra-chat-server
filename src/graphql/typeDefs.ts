import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Message {
    text: String
    date: String
    from: User
  }

  type User {
    id: String
    avatar: String
    name: String
  }

  type Conversation {
    id: String
    user: User
    messages: [Message]
  }

  type Query {
    conversations(userId: String!): [Conversation]
  }
`;
