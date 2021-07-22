import { Injectable } from '@nestjs/common';
import  * as bcrypt from 'bcrypt'
import { Connection } from 'typeorm';
import { User } from './user.entity';
const saltRounds = 10;

// This should be a real class/interface representing a user entity

@Injectable()
export class UsersService {
  constructor(private connection: Connection) {}

  private readonly users:User[] = [
    {
      userId: 1,
      userName: 'john',
      passwordHash: 'changeme',
    },
    {
      userId: 2,
      userName: 'maria',
      passwordHash: 'guess',
    },
  ].map(val => {
    const salt = bcrypt.genSaltSync(saltRounds);
    val.passwordHash = bcrypt.hashSync(val.passwordHash, salt)
    return val;
  });

  async findOne(userName: string): Promise<User | undefined> {
    return this.users.find(user => user.userName === userName);
  }

  async create(userData: User): Promise<User> {
    return this.connection.manager.save(userData)
  }


}