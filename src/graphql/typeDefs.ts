import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Message {
    text: String
    date: String
  }

  type User {
    id: String
    avatar: String
    name: String
  }

  type Conversation {
    id: String
    user: User
    lastMessage: Message
  }

  type Query {
    conversations: [Conversation]
  }
`;
