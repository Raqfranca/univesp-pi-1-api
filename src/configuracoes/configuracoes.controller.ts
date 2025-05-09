import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ConfiguracoesService } from './configuracoes.service';
import { Configuracoes } from './configuracoes.schema';

@Controller('configuracoes')
export class ConfiguracoesController {
  constructor(private readonly service: ConfiguracoesService) {}

  @Post()
  create(@Body() data: Partial<Configuracoes>) {
    return this.service.create(data);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.service.findById(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: Partial<Configuracoes>) {
    return this.service.update(id, data);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.service.delete(id);
  }
}
