import { withFilter } from 'apollo-server';

import { pubsub, conversationController, messagesController } from '../container';

export const resolvers = {
  Query: {
    conversations: (root, args) => conversationController.getUserConversations(args.userId),
    conversationById: (root, args) => conversationController.getConversation(args.userId, args.conversationId)
  },
  Mutation: {
    addMessage: (root, args) => messagesController.addMessage(args.conversationId, args.userId, args.message)
  },
  Subscription: {
    messageAdded: {
      subscribe: withFilter(
        () => pubsub.asyncIterator('messageAdded'),
        (payload, variables) => payload.conversationId === variables.conversationId
      )
    }
  }
};
