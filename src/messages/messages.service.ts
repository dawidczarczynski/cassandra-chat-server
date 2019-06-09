import { MessagesDao } from './messages.dao';
import { Message } from '../shared/message.model';
import { UsersService } from '../users/users.service';

export class MessagesService {

  constructor(
    private usersService: UsersService,
    private messagesDao: MessagesDao
  ) {}

  async constructMessage(text: string, userId: string): Promise<Message> {
    const from = await this.usersService.getUserById(userId);
    return {
      text,
      date: new Date().toISOString(),
      from
    };
  }

  async getConverastionMessages(conversationId: string): Promise<Message[]> {
    return this.messagesDao.getMessagesByConversationId(conversationId);
  }

  async saveMessage(conversationId: string, message: Message): Promise<Message> {
    await this.messagesDao.saveMessage(message, conversationId);
    return message;
  }

}