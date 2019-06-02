import { Conversation } from './conversation.model';

export class ConversationController {

  getUserConversations(userId: string): Conversation[] {
    return [
      {
        id: 'first-conversation-id',
        user: {
          id: 'john-doe-id',
          avatar: 'assets/avatar.jpg',
          name: 'John Doe'
        },
        lastMessage: {
          text: 'Last message from first chat with John Doe...',
          date: new Date()
        }
      }
    ];
  }

}
