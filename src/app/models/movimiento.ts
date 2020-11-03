import { Timestamp } from 'rxjs/internal/operators/timestamp';
import { Categoria } from './categoria';

export class Movimiento {
    id: number;
    nombre: string;
    importe: number;
    tipo: string;
    fecha: Date;
    fechaCreacion: Date;
    categoria: Categoria;
}

export const TIPOS: Array<any> = [
    {id: 'GA', nombre: 'Gasto'},
    {id: 'IN', nombre: 'Ingreso'},
];
