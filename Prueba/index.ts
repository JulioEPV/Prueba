import conectarBD from  './db/db';
import { UserModel } from './models/user';

const main  = async () => {
    await conectarBD();

    // CREAR UN USUARIO
    await UserModel.create({
        correo:"dsl@c.com",
        identificacion: "16546",
        nombre: "Daniel",
        apellido: "Saldarriaga",
    }).then((u)=> {
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