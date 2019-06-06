import { conversationController } from '../container';

export const resolvers = {
  Query: {
    conversations: (root, args, context) => conversationController.getUserConversations(args.userId)
  }
};
