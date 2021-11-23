import conectarBD from  './db/db';
import { UserModel } from './models/user';
import { ProjectModel } from './models/project';
import { Enum_Rol, Enum_EstadoUsuario, Enum_TipoObjetivo } from './models/enums';
import { ObjectId } from 'mongoose';
import { ObjectiveModel } from './models/objetctive';

const main  = async () => {
    await conectarBD();

/*     const objet = await ObjectiveModel.create({
        descripcion: "Este es el objetivo especifico",
        tipo: Enum_TipoObjetivo.especifico,
    }) */

    ProjectModel.create({
        nombre: 'Proyecto 2',
        presupuesto: 120,
        fechaInicio: Date.now(),
        fechaFin: new Date('2022/11/10'),
        lider:'6199943e581ebf8746f0fbdf',
        objetivos: ['619c3ae3d2a3b7ad95f5ec1e','619c3b89902b4a7477f5ced0']
    });

/*     const proyecto: any = await ProjectModel.find({nombre: 'Proyecto 2'}).populate('lider');
    console.log('El proyecto es: ',proyecto); */

/*     const lider = await UserModel.find({ _id: proyecto[0].lider});
    console.log('El lider del proyecto es: ',lider);
 */


 
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