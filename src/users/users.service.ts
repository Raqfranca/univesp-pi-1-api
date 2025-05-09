import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './interfaces/user.interface';
import { LoginUserDto } from './dto/login-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const existingUser = await this.userModel.findOne({ email: createUserDto.email }).exec();
    
    if (existingUser) {
      throw new BadRequestException('Este e-mail já está cadastrado');
    }
  
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }
  
  // Método para buscar todos os usuários
  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  // Método para buscar um usuário pelo ID
  async findOne(id: string): Promise<User> {
    const user = await this.userModel.findById(id).exec();
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  }
  
  // Método para atualizar o usuário
  async update(id: string, updateUserDto: CreateUserDto): Promise<User> {
    
    const user = await this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true }).exec();
    
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  }

  // Método para deletar o usuário
  async remove(id: string): Promise<any> {
    
    const user = await this.userModel.findByIdAndDelete(id).exec();
    
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  }

  async validateUser(loginUserDto: LoginUserDto) {
    const { email, password } = loginUserDto;
  
    const user = await this.userModel.findOne({ email }).exec();
  
    if (!user) {
      throw new BadRequestException('Usuário não encontrado');
    }
  
    if (user.password !== password) {
      throw new BadRequestException('Senha incorreta');
    }
  
    return { message: 'Login realizado com sucesso', userId: user._id , userPermission: user.permission};
  }
}
