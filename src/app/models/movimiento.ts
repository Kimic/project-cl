import { Timestamp } from 'rxjs/internal/operators/timestamp';

export class Movimiento {
    id: number;
    nombre: string;
    importe: number;
    tipo: string;
    fecha: Date;
    fechaCreacion: Date;
}
