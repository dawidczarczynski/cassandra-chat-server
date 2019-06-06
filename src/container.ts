import { ConversationController } from './coversations/conversation.controller';
import { ConversationService } from './coversations/coversation.service';

export const conversationService = new ConversationService();
export const conversationController = new ConversationController(conversationService);
