import { Module } from '@nestjs/common';
import { UsersModule } from './modules/user.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './modules/database.module';

@Module({
  imports: [ConfigModule.forRoot(), DatabaseModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
