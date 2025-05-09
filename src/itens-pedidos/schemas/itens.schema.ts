import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type ItensPedidosDocument = ItensPedidos & Document;

@Schema()
export class ItensPedidos {
  @Prop({ required: true, type: Types.ObjectId, ref: 'Pedido' })
  id_pedido: Types.ObjectId;

  @Prop({ required: true, type: Types.ObjectId, ref: 'Produto' })
  id_produto: Types.ObjectId;

  @Prop({ required: true })
  quantidade: number;
}

export const ItensPedidosSchema = SchemaFactory.createForClass(ItensPedidos);
