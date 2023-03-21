import { DataSource } from 'typeorm';
import { User } from '../entities/user.entity';

export const UserRepository = [
  {
    provide: 'UserRepository',
    useFactory: (dataSource: DataSource) => {
      console.log(dataSource);
      return dataSource.getRepository(User);
    },
    inject: ['DATA_SOURCE'],
  },
];
