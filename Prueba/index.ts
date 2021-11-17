import conectarBD from  './db/db';
import { UserModel } from './models/user';

const main  = async () => {
    await conectarBD();

    // CREAR UN USUARIO
/*     await UserModel.create({
        correo:"dsl@c.com",
        identificacion: "16546",
        nombre: "Daniel",
        apellido: "Saldarriaga",
    }).then((u)=> {
        console.log('usuario creado',u);
    }).catch((e)=>{
        console.error('Error creando el usuario',e);
    }); */
};

main();