import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Produto, ProdutoDocument } from './schemas/products.schema';
import { CreateProdutoDto } from './dto/create-products.dto';
import { UpdateProdutoDto } from './dto/update-products.dto';


@Injectable()
export class ProdutosService {
  constructor(
    @InjectModel(Produto.name) private produtoModel: Model<ProdutoDocument>,
  ) {}

  create(createProdutoDto: CreateProdutoDto) {
    const produto = new this.produtoModel(createProdutoDto);
    return produto.save();
  }

  findAll() {
    return this.produtoModel.find().exec();
  }

  findOne(id: string) {
    return this.produtoModel.findById(id).exec();
  }

  update(id: string, updateProdutoDto: UpdateProdutoDto) {
    return this.produtoModel.findByIdAndUpdate(id, updateProdutoDto, { new: true }).exec();
  }

  remove(id: string) {
    return this.produtoModel.findByIdAndDelete(id).exec();
  }
}
