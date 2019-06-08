import { User } from '../shared/user.model';
import { users } from './mocks';

export class UsersService {

  getUserById(userId: string): User {
    return users.find(user => user.id === userId);
  }

}