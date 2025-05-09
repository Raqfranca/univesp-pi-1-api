import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Pedido, PedidoDocument } from './schemas/pedido.schema';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';

@Injectable()
export class PedidosService {
  constructor(
    @InjectModel(Pedido.name) private pedidoModel: Model<PedidoDocument>,
  ) {}

  create(dto: CreatePedidoDto) {
    const pedido = new this.pedidoModel(dto);
    return pedido.save();
  }

  findAll() {
    return this.pedidoModel.find().exec();
  }

  findOne(id: string) {
    return this.pedidoModel.findById(id).exec();
  }

  update(id: string, dto: UpdatePedidoDto) {
    return this.pedidoModel.findByIdAndUpdate(id, dto, { new: true }).exec();
  }

  remove(id: string) {
    return this.pedidoModel.findByIdAndDelete(id).exec();
  }
}
