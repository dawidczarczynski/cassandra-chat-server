import { User } from '../shared/user.model';
import { users } from './mocks';
import { UsersDao } from './users.dao';

export class UsersService {

  constructor(private usersDao: UsersDao) {}

  getUserById(userId: string): User {
    return users.find(user => user.id === userId);
  }

  async getAllUsers(): Promise<User[]> {
    return await this.usersDao.getAllUsers();
  }

}