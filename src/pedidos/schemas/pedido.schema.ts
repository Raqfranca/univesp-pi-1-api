import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PedidoDocument = Pedido & Document;

@Schema()
export class Pedido {
  @Prop({ required: true })
  id_usuario: string;

  @Prop({ default: Date.now })
  data_pedido: Date;

  @Prop({ required: true })
  total: number;

  @Prop({ enum: ['pronta_entrega', 'encomenda'], required: true })
  tipo: string;

  @Prop({ required: true })
  pagamento_metodo: string;

  @Prop({ required: true })
  tipo_entrega: string;
}

export const PedidoSchema = SchemaFactory.createForClass(Pedido);
