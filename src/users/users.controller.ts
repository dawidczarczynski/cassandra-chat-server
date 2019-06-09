import { UsersService } from './users.service';
import { User } from '../shared/user.model';

export class UsersController {

  constructor(private service: UsersService) {}

  async getAllUsers(): Promise<User[]> {
    return await this.service.getAllUsers();
  }
}