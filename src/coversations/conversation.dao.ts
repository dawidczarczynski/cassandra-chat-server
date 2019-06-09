import { Client } from 'cassandra-driver';
import { Conversation } from './conversation.model';

export class ConversationDao {

  constructor(private client: Client) {}

  getAllUserConversations(userId: string): Promise<Conversation[]> {
    const query = `SELECT * FROM conversations WHERE users CONTAINS '${userId}'`;

    return this.client
      .execute(query)
      .then((result: any) => result.rows);
  }

  getConversationById(conversationId: string): Promise<Conversation> {
    const query = `SELECT * from conversations WHERE id=${conversationId}`;

    return this.client
      .execute(query)
      .then((result: any) => result.rows[0]);
  }

}