import { Document } from 'mongoose';

export interface Address {
  street: string;
  number: string;
  city: string;
  zipCode: string;
  complement?: string;
}

export interface User extends Document {
  readonly name: string;
  readonly email: string;
  readonly phone: string;
  readonly password: string;
  readonly permission: 'user' | 'admin';
  readonly address: Address;
}

