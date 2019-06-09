import { PubSub } from 'apollo-server';
import { client } from './database';

import { ConversationController } from './coversations/conversation.controller';
import { ConversationService } from './coversations/coversation.service';
import { MessagesController } from './messages/messages.controller';
import { UsersService } from './users/users.service';
import { UsersDao } from './users/users.dao';
import { UsersController } from './users/users.controller';
import { ConversationDao } from './coversations/conversation.dao';
import { MessagesService } from './messages/messages.service';
import { MessagesDao } from './messages/messages.dao';

export const pubsub = new PubSub();
// Users
export const usersDao = new UsersDao(client);
export const usersService = new UsersService(usersDao);
export const usersController = new UsersController(usersService);
// Messages
export const messagesDao = new MessagesDao(client);
export const messagesService = new MessagesService(usersService, messagesDao);
export const messagesController = new MessagesController(pubsub, messagesService);
// Conversation
export const conversationDao = new ConversationDao(client);
export const conversationService = new ConversationService(usersService, messagesService, conversationDao);
export const conversationController = new ConversationController(conversationService);