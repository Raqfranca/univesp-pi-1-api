import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProdutoDocument = Produto & Document;

@Schema()
export class Produto {
  @Prop({ required: true })
  nome: string;

  @Prop()
  descricao: string;

  @Prop({ required: true })
  preco: number;

  @Prop()
  imagem: string;

  @Prop()
  categoria: string;

  @Prop()
  quantidade: number;

  @Prop({ default: true })
  disponivel: boolean;

  @Prop({ enum: ['pronta_entrega', 'encomenda'], required: true })
  tipo: string;
}

export const ProdutoSchema = SchemaFactory.createForClass(Produto);
