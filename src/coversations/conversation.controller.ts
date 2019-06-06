import { ConversationService } from './coversation.service';
import { ConversationDto } from './conversation.dto';

export class ConversationController {

  constructor(private service: ConversationService) {}

  getUserConversations(userId: string): ConversationDto[] {
    return this.service
      .getAllConversations(userId, 1)
      .map(conversation => ({
        ...conversation,
        user: conversation.users.find(user => user.id !== userId)
      }));
    ;
  }

  getConversation(userId: string, conversationId: string): ConversationDto {
    const entity = this.service.getConversationById(conversationId);
    return {
      ...entity,
      user: entity.users.find(user => user.id !== userId)
    }
  }

}
