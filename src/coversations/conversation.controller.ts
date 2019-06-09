import { ConversationService } from './coversation.service';
import { ConversationDto } from './conversation.dto';

export class ConversationController {

  constructor(private service: ConversationService) {}

  async getUserConversations(userId: string): Promise<ConversationDto[]> {
    return this.service.getAllConversations(userId);
  }

  // async getConversation(userId: string, conversationId: string): Promise<ConversationDto> {
  //   return this.service.getConversationById(conversationId);
  // }

}
