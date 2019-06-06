import { User } from './user.model';

export interface Message {
  text: string;
  date: string;
  from: User
}
