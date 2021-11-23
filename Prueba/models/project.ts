import { Schema, model } from "mongoose";
import { Enum_EstadoProyecto,Enum_FaseProyecto, Enum_TipoObjetivo} from "./enums";
import { ObjectiveModel } from "./objetctive";
import { UserModel } from "./user";

interface Proyecto {
    nombre: string;
    presupuesto: number;
    fechaInicio: Date;
    fechaFin: Date;
    estado: Enum_EstadoProyecto;
    fase: Enum_FaseProyecto;
    lider: Schema.Types.ObjectId;
    objetivos: [{ descripcion: String; tipo: Enum_TipoObjetivo }];

}

const projectSchema = new Schema<Proyecto>({

    nombre:{
        type: String,
        required: true,
    },

    presupuesto:{
        type: Number,
        required: true,
    },

    fechaInicio:{
        type: Date,
        required: true,
    },
    
    fechaFin:{
        type: Date,
        required: true,
    },

    estado: {
        type: String,
        enum: Enum_EstadoProyecto,
        default: Enum_EstadoProyecto.inactivo,
    },

    fase:{
        type: String,
        enum: Enum_FaseProyecto,
        default: Enum_FaseProyecto.nula,
    },

    lider:{
        type: Schema.Types.ObjectId,
        required: true,
        ref: UserModel,
    },

/*     objetivos: [
        {
            type: Schema.Types.ObjectId,
            ref: ObjectiveModel,
        },
    ], */


});

const ProjectModel = model('Proyecto', projectSchema, 'ColeccionProyectos');

export  {ProjectModel};