import { Conversation } from './conversation.model';
import { conversations } from './mocks';

export class ConversationService {

  getAllConversations(userId: string, messagesLimit: number = 10): Conversation[] {
    return conversations
      .filter(
        conversation => {
          console.log(conversation);
          const matching = !!conversation.users.find(user => user.id === userId);
          console.log({ matching, userId });
          return matching;
        }
      )
      .map(
        conversation => ({
          ...conversation,
          messages: conversation.messages.slice(0, messagesLimit)
        })
    );
  }

}