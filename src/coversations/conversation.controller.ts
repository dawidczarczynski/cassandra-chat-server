import { ConversationService } from './coversation.service';
import { ConversationDto } from './conversation.dto';
import { conversationDtoMapper } from './conversation.mapper';

export class ConversationController {

  constructor(private service: ConversationService) {}

  getUserConversations(userId: string): ConversationDto[] {
    return this.service
      .getAllConversations(userId, 1)
      .map(conversation => conversationDtoMapper(conversation, userId));
    ;
  }

  getConversation(userId: string, conversationId: string): ConversationDto {
    const conversation = this.service.getConversationById(conversationId);
    return conversationDtoMapper(conversation, userId);
  }

}
