import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { ItensPedidosService } from './itens.service';
import { ItensPedidos } from './schemas/itens.schema';

@Controller('itens-pedidos')
export class ItensPedidosController {
  constructor(private readonly itensPedidosService: ItensPedidosService) {}

  @Post()
  create(@Body() data: Partial<ItensPedidos>) {
    return this.itensPedidosService.create(data);
  }

  @Get()
  findAll() {
    return this.itensPedidosService.findAll();
  }
  
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.itensPedidosService.findById(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: Partial<ItensPedidos>) {
    return this.itensPedidosService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.itensPedidosService.delete(id);
  }
}
