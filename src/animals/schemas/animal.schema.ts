// animals/schemas/animal.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true })
export class Animal extends Document {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  user_id: Types.ObjectId;

  @Prop({ required: true })
  name: string;

  @Prop()
  age: number;

  @Prop({ required: true })
  species: string;

  @Prop()
  photo_url: string;

  @Prop()
  description: string;

  @Prop({ default: false })
  adopted: boolean;
}

export const AnimalSchema = SchemaFactory.createForClass(Animal);
