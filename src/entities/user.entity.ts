import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

import { ApiProperty } from '@nestjs/swagger';

@Entity('Tbl_User')
export class User {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  public readonly id: number;

  @ApiProperty()
  @Column()
  public name: string;

  @ApiProperty({
    nullable: true,
    required: false,
  })
  @Column({ nullable: true })
  public avatar?: string;

  @ApiProperty()
  @Column()
  public email: string;

  @ApiProperty()
  @Column({ name: 'firebase_uid' })
  public uid: string;

  @ApiProperty({ nullable: true, required: false })
  @Column({ name: 'active', nullable: true })
  public isActive: boolean;

  @ApiProperty({
    nullable: true,
    required: false,
  })
  @CreateDateColumn({ nullable: false })
  public created_at: Date;

  @ApiProperty({
    nullable: true,
    required: false,
  })
  @UpdateDateColumn({ nullable: true })
  public updated_at: Date;
}
