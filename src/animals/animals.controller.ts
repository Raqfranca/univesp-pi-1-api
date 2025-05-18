import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { AnimalsService } from './animals.service';
import { Animal } from './schemas/animal.schema';

@Controller('animals')
export class AnimalsController {
  constructor(private readonly animalsService: AnimalsService) {}

  @Post()
  create(@Body() data: Partial<Animal>) {
    return this.animalsService.create(data);
  }

  @Get()
  findAll() {
    return this.animalsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.animalsService.findByUserId(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: Partial<Animal>) {
    return this.animalsService.update(id, data);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.animalsService.delete(id);
  }
}
