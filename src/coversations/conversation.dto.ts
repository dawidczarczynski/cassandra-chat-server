import { User } from '../shared/user.model';
import { Message } from '../shared/message.model';

export interface ConversationDto {
  id: string;
  user: User;
  messages: Message[]
}
