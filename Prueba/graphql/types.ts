import { gql } from 'apollo-server-express';

const typesDefs = gql`
type Usuario {
    nombre: String!
    }

    type Query {
        Usuarios: [Usuario]
    }
    `;

export {typesDefs}