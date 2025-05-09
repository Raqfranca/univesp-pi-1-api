import { IsString, IsNumber, IsBoolean, IsOptional, IsIn } from 'class-validator';

export class CreateProdutoDto {
  @IsString()
  nome: string;

  @IsOptional()
  @IsString()
  descricao?: string;

  @IsNumber()
  preco: number;

  @IsOptional()
  @IsString()
  imagem?: string;

  @IsOptional()
  @IsString()
  categoria?: string;

  @IsOptional()
  @IsNumber()
  quantidade?: number;

  @IsOptional()
  @IsBoolean()
  disponivel?: boolean;

  @IsString()
  @IsIn(['pronta_entrega', 'encomenda'])
  tipo: string;
}
