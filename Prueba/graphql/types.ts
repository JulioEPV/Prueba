import { gql } from 'apollo-server-express';

const typesDefs = gql`

enum Enum_EstadoUsuario{
    PENDIENTE
    AUTORIZADO
    NO_AUTORIZADO
}

enum Enum_Rol {
    ESTUDIANTE 
    LIDER 
    ADMINISTRADOR 
}

type Usuario {
    _id: ID! 
    nombre: String!
    apellido: String!
    identificacion: String!
    correo: String!
    estado: Enum_EstadoUsuario! 
    rol: Enum_rol!
    }

    type Query {
        Usuarios: [Usuario]
    }
    `;

export {typesDefs}