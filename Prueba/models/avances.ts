import { Schema, model} from "mongoose";

interface Avance {
    fecha: Date;
    descripcion: string;
    observaciones: [string];
    
}