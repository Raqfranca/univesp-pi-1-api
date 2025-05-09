import { IsString, IsEmail, IsOptional, IsEnum, IsObject, IsNotEmpty } from 'class-validator';

enum Permission {
  USER = 'user',
  ADMIN = 'admin',
}

class AddressDto {
  @IsString()
  @IsNotEmpty()
  street: string;

  @IsString()
  @IsNotEmpty()
  number: string;

  @IsString()
  @IsNotEmpty()
  city: string;

  @IsString()
  @IsNotEmpty()
  zipCode: string;

  @IsString()
  @IsOptional()
  complement?: string;
}

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  phone: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsEnum(Permission)
  @IsNotEmpty()
  permission: Permission;

  @IsObject()
  @IsNotEmpty()
  address: AddressDto;
}

