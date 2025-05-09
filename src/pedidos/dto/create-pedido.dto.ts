import { IsString, IsNumber, IsIn, IsDateString } from 'class-validator';

export class CreatePedidoDto {
  @IsString()
  id_usuario: string;

  @IsNumber()
  total: number;

  @IsString()
  @IsIn(['pronta_entrega', 'encomenda'])
  tipo: string;

  @IsString()
  pagamento_metodo: string;

  @IsString()
  tipo_entrega: string;
}
