import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ConfiguracoesDocument = Configuracoes & Document;

@Schema()
export class Configuracoes {
  @Prop({ required: true })
  nome_loja: string;

  @Prop({ required: true })
  horario_funcionamento: string;

  @Prop({ type: [String], default: [] })
  metodos_pagamento: string[];
}

export const ConfiguracoesSchema = SchemaFactory.createForClass(Configuracoes);
