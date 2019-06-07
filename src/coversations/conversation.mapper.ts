import { Conversation } from './conversation.model';

export const conversationDtoMapper = (conversation: Conversation, userId: string) => ({
        ...conversation,
        user: conversation.users.find(user => user.id !== userId)
      })