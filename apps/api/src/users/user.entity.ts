import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { BaseEntity } from '../core/base.entity';

@Entity()
export class User extends BaseEntity {

  @Column()
  firstName?: string;

  @Column()
  lastName?: string;

  @Column()
  email?: string;

  @Column()
  userName: string;

  @Column()
  passwordHash: string;

}