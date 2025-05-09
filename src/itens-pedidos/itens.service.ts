import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ItensPedidos, ItensPedidosDocument } from './schemas/itens.schema';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class ItensPedidosService {
  constructor(
    @InjectModel(ItensPedidos.name) private itensPedidosModel: Model<ItensPedidosDocument>,
  ) {}

  async create(data: Partial<ItensPedidos>): Promise<ItensPedidos> {
    const item = new this.itensPedidosModel(data);
    return item.save();
  }

  async findAll(): Promise<ItensPedidos[]> {
    return this.itensPedidosModel.find().populate('id_pedido').populate('id_produto');
  }
  
  async findById(id: string): Promise<ItensPedidos> {
    const item = await this.itensPedidosModel.findById(id)
      .populate('id_pedido')
      .populate('id_produto');
  
    if (!item) {
      throw new NotFoundException('Item não encontrado');
    }
  
    return item;
  }
  
  async update(id: string, data: Partial<ItensPedidos>): Promise<ItensPedidos> {
    const updated = await this.itensPedidosModel.findByIdAndUpdate(id, data, { new: true });
  
    if (!updated) {
      throw new NotFoundException('Item para atualizar não encontrado');
    }
  
    return updated;
  }
  
  async delete(id: string): Promise<ItensPedidos> {
    const deleted = await this.itensPedidosModel.findByIdAndDelete(id);
  
    if (!deleted) {
      throw new NotFoundException('Item para deletar não encontrado');
    }
  
    return deleted;
  
  }
}

  