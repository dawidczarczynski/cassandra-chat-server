import { Conversation } from './conversation.model';
import { users } from '../users/mocks';

export const conversations: Conversation[] = [
  {
    id: 'conversation-id',
    users: [ users[0], users[1] ],
    messages: [
      {
        text: 'Some message 1',
        date: new Date().toISOString(),
        from: users[0]
      },
      {
        text: 'Some message 2',
        date: new Date().toISOString(),
        from: users[1]
      },
      {
        text: 'Some message 3',
        date: new Date().toISOString(),
        from: users[0]
      },
      {
        text: 'Some message 4',
        date: new Date().toISOString(),
        from: users[0]
      },
    ]
  }
];
