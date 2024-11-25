import {
  IsInt,
  IsOptional,
  IsString,
  IsArray,
  IsNotEmpty,
  IsJSON,
} from 'class-validator';

export class CreateSaleDeletedDto {
  sucursalId: number;
  ventaId: number;
  adminPassword: string;
  usuarioId: number; // ID del usuario que realizó la eliminación
  motivo: string; // Motivo de la eliminación
  totalVenta: number; // Total de la venta
  // clienteId: number; // ID del cliente relacionado con la venta
  clienteId?: number | null; // Cliente relacionado (puede ser opcional o nulo)

  productos: {
    productoId: number; // ID del producto
    cantidad: number; // Cantidad del producto eliminado
    precioVenta: number; // Precio de venta del producto
  }[]; // Información de los productos eliminados
}
