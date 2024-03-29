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
    users: [User]
    conversations(userId: String!): [Conversation]
    conversationById(userId: String!, conversationId: String!): Conversation
  }

  type Mutation {
    addMessage(conversationId: String!, userId: String!, message: String!): Message
  }

  type Subscription {
    messageAdded(conversationId: String!): Message
  }
`;
