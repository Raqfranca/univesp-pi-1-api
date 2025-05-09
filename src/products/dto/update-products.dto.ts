import { PartialType } from '@nestjs/mapped-types';
import { CreateProdutoDto } from './create-products.dto';


export class UpdateProdutoDto extends PartialType(CreateProdutoDto) {}
