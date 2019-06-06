import { User } from '../shared/user.model';
import { Message } from '../shared/message.model';

export interface Conversation {
  id: string;
  users: [User, User];
  messages: Message[];
}
