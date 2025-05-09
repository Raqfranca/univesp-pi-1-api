import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ItensPedidosController } from './itens.controller';
import { ItensPedidosService } from './itens.service';
import { ItensPedidos, ItensPedidosSchema } from './schemas/itens.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ItensPedidos.name, schema: ItensPedidosSchema },
    ]),
  ],
  controllers: [ItensPedidosController],
  providers: [ItensPedidosService],
})
export class ItensPedidosModule {}
