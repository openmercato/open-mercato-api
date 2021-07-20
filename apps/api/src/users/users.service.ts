import { Injectable } from '@nestjs/common';
import  * as bcrypt from 'bcrypt'
const saltRounds = 10;

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
  ].map(val => {
    const salt = bcrypt.genSaltSync(saltRounds);
    val.password = bcrypt.hashSync(val.password, salt)
    return val;
  });

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }
}