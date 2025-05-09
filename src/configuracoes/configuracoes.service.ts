import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Configuracoes, ConfiguracoesDocument } from './configuracoes.schema';

@Injectable()
export class ConfiguracoesService {
  constructor(
    @InjectModel(Configuracoes.name) private readonly model: Model<ConfiguracoesDocument>,
  ) {}

  async create(data: Partial<Configuracoes>): Promise<Configuracoes> {
    return this.model.create(data);
  }

  async findAll(): Promise<Configuracoes[]> {
    return this.model.find().exec();
  }

  async findById(id: string): Promise<Configuracoes> {
    const config = await this.model.findById(id).exec();
    if (!config) {
      throw new NotFoundException(`Configuração com id '${id}' não encontrada`);
    }
    return config;
  }

  async update(id: string, data: Partial<Configuracoes>): Promise<Configuracoes> {
    const updated = await this.model.findByIdAndUpdate(id, data, { new: true }).exec();
    if (!updated) {
      throw new NotFoundException(`Configuração com id '${id}' não encontrada para atualização`);
    }
    return updated;
  }

  async delete(id: string): Promise<Configuracoes> {
    const deleted = await this.model.findByIdAndDelete(id).exec();
    if (!deleted) {
      throw new NotFoundException(`Configuração com id '${id}' não encontrada para exclusão`);
    }
    return deleted;
  }
}
