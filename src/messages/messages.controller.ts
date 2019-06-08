import { PubSub } from 'apollo-server';
import { UsersService } from '../users/users.service';
import { Message } from '../shared/message.model';

export class MessagesController {

  constructor(
    private pubsub: PubSub,
    private usersService: UsersService
  ) {}

  addMessage(conversationId: string, userId: string, text: string): Message {
    const from = this.usersService.getUserById(userId);
    const messageAdded = {
      text,
      date: new Date().toISOString(),
      from
    };

    this.pubsub.publish('messageAdded', { messageAdded, conversationId })

    return messageAdded;
  }

}
