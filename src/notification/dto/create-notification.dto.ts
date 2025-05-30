import { TipoNotificacion } from '@prisma/client';
import {
  IsArray,
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
  ArrayNotEmpty,
} from 'class-validator';

export class CreateNotificationDto {
  @IsString()
  mensaje: string;

  @IsOptional()
  @IsInt()
  remitenteId?: number;

  @IsArray()
  @ArrayNotEmpty()
  @IsInt({ each: true }) // Asegura que cada elemento del array sea un número entero
  usuarioId: number[]; // Ahora es un array de IDs de usuarios destinatarios

  @IsEnum(TipoNotificacion)
  tipoNotificacion: TipoNotificacion;

  @IsOptional()
  @IsInt()
  referenciaId?: number;
}
