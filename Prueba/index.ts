import conectarBD from  './db/db';
import { UserModel } from './models/user';
import { Enum_Rol, Enum_EstadoUsuario } from './models/enums';

const main  = async () => {
    await conectarBD();

    // CREAR UN USUARIO
/*     await UserModel.create({
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
    }); */

    // OBTENER LOS USUARIOS
/* 
    await UserModel.find({correo:'dsl@c.com'})
    .then((u)=> {
        console.log('usuarios',u);
    })

    .catch((e) =>{
        console.error('error obteniendo los usuarios',e);
    }); */

    // OBTENER UN SOLO USUARIO
 /*    await UserModel.findOne({identificacion:'16546'})
    .then((u) =>{
        console.log('usuario encontrado', u);
    })
    .catch((e)=>{
        console.error(e);
    }); */

    //EDITAR UN USUARIO
/*     await UserModel.findOneAndUpdate(
        {correo:'dsl@cc.com'},
        {
            nombre: 'Juan',
            apellido: 'Lopez',
        }
        ).then(u=>{
            console.log("usuario actualizado",u);
        }).catch(e=>{
            console.error('error acutalizando',e);
        }); */

    // ELIMINAR UN USUARIO
/*     await UserModel.findOneAndDelete({correo:'dsl@cc.com'})
    .then((u) => {
        console.log('usuario eliminado', u);
    })
    .catch(e=>{
        console.error(e);
    }); */
};

main();