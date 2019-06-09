import { User } from '../shared/user.model';
import { UsersDao } from './users.dao';

export class UsersService {

  constructor(private usersDao: UsersDao) {}

  async getUserById(userId: string): Promise<User> {
    return await this.usersDao.getUserById(userId);
  }

  async getAllUsers(): Promise<User[]> {
    return await this.usersDao.getAllUsers();
  }

}