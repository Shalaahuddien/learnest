import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { request } from 'http';
import { CreateUserDto } from 'src/dto/users.dto';
import { User } from 'src/Entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  [x: string]: any;
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

 async deleteUser(userId: number)
  {
    let user = await this.userRepository.findOne({
      where:
      {
        id:userId
      }
    })

    if(!user)
    {
      throw new BadRequestException('user tidak ditemukan');
    }

    this.userRepository.remove(user);

    // this.userRepository.delete(user);

  }
      
  createUser(request: CreateUserDto) {
    // const newUser = this.userRepository.create(createUserDto);
    // return this.userRepository.save(newUser);

    return this.userRepository.create({
      email: request.email,
      password: request.password,
      username: request.name
    });

  }
      
  findUsersById(id: number) {
    return this.userRepository.findOne({
        where: {id: id},
    });
  }
}
