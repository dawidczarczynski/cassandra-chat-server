import { PubSub } from 'apollo-server';
import { ConversationController } from './coversations/conversation.controller';
import { ConversationService } from './coversations/coversation.service';
import { MessagesController } from './messages/messages.controller';
import { UsersService } from './users/users.service';

export const pubsub = new PubSub();
export const conversationService = new ConversationService();
export const usersService = new UsersService();
export const conversationController = new ConversationController(conversationService);
export const messagesController = new MessagesController(pubsub, usersService);
