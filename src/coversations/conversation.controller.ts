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

  getConvertationMessages(conversationId: string): any {
    return [];
  }

}
