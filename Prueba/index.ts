import conectarBD from  './db/db';
import { UserModel } from './models/user';
import { ProjectModel } from './models/project';
import { Enum_Rol, Enum_EstadoUsuario, Enum_TipoObjetivo } from './models/enums';
import { ObjectId } from 'mongoose';
import { ObjectiveModel } from './models/objective';

const crearProyectoConObjetivos = async () =>{
    const usuarioInicial = await UserModel.create({
        nombre: 'Daniel',
        apellido: 'Saldarriaga',
        correo: 'dsl@cc.com',
        identificacion: 1234,
        rol: Enum_Rol.administrador,
        estado: Enum_EstadoUsuario.autorizado,
    });
    
    const proyectoCreado = await ProjectModel.create({
        nombre: 'Proyecto Mision TIC',
        fechaInicio: new Date ('2021/12/24'),
        fechaFin: new Date ('2022/12/24'),
        presupuesto: 120000,
        lider: usuarioInicial.id,
    });
    
    const objetivoGeneral = await ObjectiveModel.create({
        descripcion: 'Este es el objetivo general',
        tipo: Enum_TipoObjetivo.general,
        proyecto: proyectoCreado._id,
    });
    
    const objetivoEspecifico1= await ObjectiveModel.create({
        descripcion: 'Este es el objetivo especifico 1',
        tipo: Enum_TipoObjetivo.especifico,
        proyecto: proyectoCreado._id,
    });
    
    const objetivoEspecifico2 = await ObjectiveModel.create({
        descripcion: 'Este es el objetivo especifico 2',
        tipo: Enum_TipoObjetivo.especifico,
        proyecto: proyectoCreado._id,
    });
    
    
}

const consultaProyectoConObjetivos = async () => {
    const proyecto = await ProjectModel.findOne({_id:'619d9be4f21d789acaa30992'})

    console.log('El proyecto que encontre fue', proyecto);

    const objetivos = await ObjectiveModel.find({ project: '619d9be4f21d789acaa30992'});

    console.log('Los objetivos del proyecto son: ', objetivos);

    const proyectoConObjetivos = {...proyecto, objetivos:objetivos};
    console.log('El proyecto con objetivos es: ', proyectoConObjetivos);
}


const main  = async () => {
    await conectarBD();


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


    // CRUD PROYECTO
    
    /*     const objet = await ObjectiveModel.create({
        descripcion: "Este es el objetivo especifico",
        tipo: Enum_TipoObjetivo.especifico,
    }) */

/*     ProjectModel.create({
        nombre: 'Proyecto 2',
        presupuesto: 120,
        fechaInicio: Date.now(),
        fechaFin: new Date('2022/11/10'),
        lider:'6199943e581ebf8746f0fbdf',
        objetivos: ['619c3ae3d2a3b7ad95f5ec1e','619c3b89902b4a7477f5ced0']
    }); */

/*     const proyecto: any = await ProjectModel.find({nombre: 'Proyecto 2'}).populate('objetivos');
    console.log('El proyecto es: ',proyecto); */

/*     const lider = await UserModel.find({ _id: proyecto[0].lider});
    console.log('El lider del proyecto es: ',lider);
 */