import { User } from '../shared/user.model';
import { Message } from '../shared/message.model';

export interface Conversation {
  id: string;
  user: User;
  lastMessage: Message;
}
