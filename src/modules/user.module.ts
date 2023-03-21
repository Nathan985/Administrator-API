import { Module } from '@nestjs/common';
import { UsersController } from 'src/controllers/users.controller';
import { UserRepository } from 'src/repositories/user.repository';
import { UsersService } from 'src/services/users.service';
import { DatabaseModule } from './database.module';

@Module({
  imports: [DatabaseModule],
  providers: [...UserRepository, UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
