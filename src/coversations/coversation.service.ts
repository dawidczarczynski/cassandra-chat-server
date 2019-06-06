import { Conversation } from './conversation.model';
import { conversations } from './mocks';

export class ConversationService {

  getAllConversations(userId: string, messagesLimit: number = 10): Conversation[] {
    return conversations
      .filter(conversation => !!conversation.users.find(user => user.id === userId))
      .map(convsersation => this.limitConversationMessages(convsersation, messagesLimit));
  }

  getConversationById(conversationId: string, messagesLimit: number = 10): Conversation {
    const conversation = conversations.find(({ id }: Conversation) => id === conversationId )
    return this.limitConversationMessages(conversation, messagesLimit);
  }

  private limitConversationMessages(conversation: Conversation, limit: number) {
    return ({
      ...conversation,
      messages: conversation.messages.slice(0, limit)
    });
  }

}