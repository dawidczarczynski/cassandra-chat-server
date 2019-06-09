import { ConversationService } from './coversation.service';
import { ConversationDto } from './conversation.dto';

export class ConversationController {

  constructor(private service: ConversationService) {}

  getUserConversations(userId: string): Promise<ConversationDto[]> {
    return this.service.getAllConversations(userId);
  }

  async getConversation(userId: string, conversationId: string): Promise<ConversationDto> {
    const conversation = await this.service.getConversationById(userId, conversationId);
    return conversation;
  }

}
