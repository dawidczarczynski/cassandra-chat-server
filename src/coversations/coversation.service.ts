import { Conversation } from './conversation.model';
import { ConversationDao } from './conversation.dao';
import { UsersService } from '../users/users.service';
import { ConversationDto } from './conversation.dto';
import { User } from '../shared/user.model';
import { MessagesService } from '../messages/messages.service';

export class ConversationService {

  constructor(
    private usersService: UsersService,
    private messagesService: MessagesService,
    private conversationDao: ConversationDao) {}

  async getAllConversations(userId: string, messagesLimit: number = 10): Promise<ConversationDto[]> {
    const conversations = await this.conversationDao.getAllUserConversations(userId);

    return await Promise.all(conversations.map(
      (conversation: Conversation) => this.mapConversationModelToDto(userId, conversation))
    )
  }

  async getConversationById(userId: string, conversationId: string): Promise<ConversationDto> {
    const conversation = await this.conversationDao.getConversationById(conversationId);
    return await this.mapConversationModelToDto(userId, conversation);
  }

  private async mapConversationModelToDto(userId: string, { id, users }: Conversation): Promise<ConversationDto> {
    const user = await this.retriveSecondUserData(users, userId);
    const messages = await this.messagesService.getConverastionMessages(id);
    return {
      id,
      user,
      messages
    };
  }

  private async retriveSecondUserData(users: [string, string], currentUserId: string): Promise<User> {
    const userToFetchId = users.find(id => id !== currentUserId);
    return await this.usersService.getUserById(userToFetchId);
  }


  private limitConversationMessages(conversation: Conversation, limit: number) {
    return ({
      ...conversation,
      messages: conversation.messages.slice(0, limit)
    });
  }

}