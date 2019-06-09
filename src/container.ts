import { PubSub } from 'apollo-server';
import { client } from './database';

import { ConversationController } from './coversations/conversation.controller';
import { ConversationService } from './coversations/coversation.service';
import { MessagesController } from './messages/messages.controller';
import { UsersService } from './users/users.service';
import { UsersDao } from './users/users.dao';
import { UsersController } from './users/users.controller';

export const pubsub = new PubSub();
// Users
export const usersDao = new UsersDao(client);
export const usersService = new UsersService(usersDao);
export const usersController = new UsersController(usersService);
// Conversation
export const conversationService = new ConversationService();
export const conversationController = new ConversationController(conversationService);
// Messages
export const messagesController = new MessagesController(pubsub, usersService);
