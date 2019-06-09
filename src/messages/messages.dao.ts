import { Client } from 'cassandra-driver';
import { Message } from '../shared/message.model';

export class MessagesDao {

  constructor(private client: Client) {}

  getMessagesByConversationId(conversationId: string): Promise<Message[]> {
    const query = `SELECT date, text, user FROM messages WHERE conversation_id = ${conversationId}`;

    return this.client
      .execute(query)
      .then((result: any) => result.rows);
  }

  saveMessage({ text, date, from }: Message, conversationId: string): Promise<boolean> {
    const query = `
      INSERT INTO
        messages(id, conversation_id, text, date, user)
      VALUES (
        uuid(),
        ${conversationId},
        '${text}',
        '${date}',
        {
          'id': '${from.id}',
          'name': '${from.name}',
          'avatar': '${from.avatar}'
        }
      )
    `;

    return this.client
      .execute(query)
      .then(result => !!result);
  }
}
