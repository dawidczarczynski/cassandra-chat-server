import { conversationController } from '../container';

export const resolvers = {
  Query: {
    conversations: () => conversationController.getUserConversations('any')
  }
};
