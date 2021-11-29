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
    rol: Enum_rol!
    estado: Enum_EstadoUsuario
    }

    type Query {
        Usuarios: [Usuario]
    }

    type Mutation{
        crearUsuario(
            nombre: String!
            apellido: String!
            identificacion: String!
            correo: String!
            rol: Enum_rol!
            estado: Enum_EstadoUsuario
        ): Usuario

        editarUsuario(
            _id: String!
            nombre: String!
            apellido: String!
            identificacion: String!
            correo: String!
            rol: Enum_rol!
            estado: Enum_EstadoUsuario
        ): Usuario


        eliminarUsuario(
            _id: String
            correo: String
            ): Usuario

    }


    `;

export {typesDefs}