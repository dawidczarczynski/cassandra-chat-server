import { Client } from 'cassandra-driver';
import { User } from '../shared/user.model';

export class UsersDao {

  constructor(private client: Client) {}

  async getAllUsers(): Promise<User[]> {
    const query = 'SELECT * FROM users;'

    return await this.client
      .execute(query)
      .then((result: any) => result.rows);
  }

  async getUserById(userId: string): Promise<User> {
    const query = `SELECT * FROM users WHERE id=${userId}`;

    return await this.client
      .execute(query)
      .then((result: any) => result.rows[0]);
  }

}