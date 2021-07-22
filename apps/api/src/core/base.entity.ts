
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class BaseEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;

  @Column({ type: 'boolean', default: false })
  isActive?: boolean;

  @Column({ type: 'boolean', default: false })
  isArchived?: boolean;

  @Column({ type: 'varchar', length: 300 })
  lastChangedBy?: string;

  @Column({ type: 'varchar', length: 300 })
  createdBy?: string;
}