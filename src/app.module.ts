import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { ProdutosModule } from './products/products.module';
import { ConfiguracoesModule } from './configuracoes/configuracoes.module';
import { PedidosModule } from './pedidos/pedidos.module';
import { ItensPedidosModule } from './itens-pedidos/itens.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI || 'mongodb://localhost:27017/nome_do_banco'),
    UsersModule,
    ProdutosModule,
    ConfiguracoesModule,
    PedidosModule,
    ItensPedidosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
