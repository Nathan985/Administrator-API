import { Inject, Injectable } from '@nestjs/common';
import { Body } from '@nestjs/common/decorators';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @Inject('UserRepository')
    private _userRepository: Repository<User>,
  ) {}

  create(@Body() createUserDto: User) {
    const model = this._userRepository.create(createUserDto);

    this._userRepository.save(model);

    return model;
  }

  findAll() {
    return this._userRepository.find();
  }

  findOne(id: number) {
    return this._userRepository.findOneBy({ id });
  }

  update(id: number, updateUserDto: User) {
    return this._userRepository.update(id, updateUserDto);
  }

  remove(id: number) {
    return this._userRepository.delete(id);
  }
}
