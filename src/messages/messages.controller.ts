import { PubSub } from 'apollo-server';
import { Message } from '../shared/message.model';
import { MessagesService } from './messages.service';

export class MessagesController {

  constructor(
    private pubsub: PubSub,
    private messagesService: MessagesService
  ) {}

  async addMessage(conversationId: string, userId: string, text: string): Promise<Message> {
    const messageAdded = await this.messagesService.constructMessage(text, userId);

    this.pubsub.publish('messageAdded', { messageAdded, conversationId });
    await this.messagesService.saveMessage(conversationId, messageAdded);

    return messageAdded;
  }

}
