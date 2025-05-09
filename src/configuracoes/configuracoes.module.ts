import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Configuracoes, ConfiguracoesSchema } from './configuracoes.schema';
import { ConfiguracoesService } from './configuracoes.service';
import { ConfiguracoesController } from './configuracoes.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Configuracoes.name, schema: ConfiguracoesSchema }]),
  ],
  controllers: [ConfiguracoesController],
  providers: [ConfiguracoesService],
})
export class ConfiguracoesModule {}
