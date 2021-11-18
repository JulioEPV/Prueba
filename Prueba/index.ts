import conectarBD from  './db/db';
import { UserModel } from './models/user';
import { Enum_Rol, Enum_EstadoUsuario } from './models/enums';

const main  = async () => {
    await conectarBD();

    // CREAR UN USUARIO
    await UserModel.create({
        apellido: "Saldarriaga",
        correo: "dsl@cc.com",
        identificacion: "123234",
        nombre: "Daniel",
        rol: Enum_Rol.administrador,
        estado: Enum_EstadoUsuario.noAutorizado,

    })
    .then((u)=> {
        console.log('usuario creado',u);
    }).catch((e)=>{
        console.error('Error creando el usuario',e);
    });

    // OBTENER LOS USUARIOS
/* 
    await UserModel.find({correo:'dsl@c.com'})
    .then((u)=> {
        console.log('usuarios',u);
    })

    .catch((e) =>{
        console.error('error obteniendo los usuarios',e);
    }); */
};

main();