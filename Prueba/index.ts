import conectarBD from  './db/db';
import { UserModel } from './models/user';
import { ProjectModel } from './models/project';
import { Enum_Rol, Enum_EstadoUsuario } from './models/enums';
import { ObjectId } from 'mongoose';

const main  = async () => {
    await conectarBD();

    ProjectModel.create({
        nombre: 'Proyecto 2',
        presupuesto: 120,
        fechaInicio: Date.now(),
        fechaFin: new Date('2022/11/10'),
        lider:'6199943e581ebf8746f0fbdf',
    });

/*     const proyecto: any = await ProjectModel.find({nombre: 'Proyecto 1'});
    console.log('El proyecto es: ',proyecto, proyecto[0].lider);

    const lider = await UserModel.find({ _id: proyecto[0].lider});
    console.log('El lider del proyecto es: ',lider); */



 
};

main();

// CRUD USUARIOS

   // CREAR UN USUARIO
/*     await UserModel.create({
        apellido: "Saldarriaga",
        correo: "dsllkkll@c.com",
        identificacion: "wewewe",
        nombre: "Daniel",
        rol: Enum_Rol.administrador,
        

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