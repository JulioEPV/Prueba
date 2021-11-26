enum Enum_Rol {
    estudiante = "Estudiante",
    lider = "Lider",
    administrador = "Adminsitrador",
}


enum Enum_EstadoUsuario{
    pendiente = "Pendiente",
    autorizado = "Autorizado",
    noAutorizado = "No autorizado",
}

enum Enum_EstadoProyecto{
    activo = "Activo",
    inactivo = 'Inactivo',
    }

enum Enum_FaseProyecto{
    iniciado = "Iniciado",
    desarrollo = ' En Desarrollo',
    terminado = 'terminado',
    nula = '',
}

enum Enum_TipoObjetivo{
    general = 'general',
    especifico = 'especifico',
}

enum Enum_EstadoInscripcion {
    aceptada = "Aceptada",
    rechazada = "Rechazada",
}

export {Enum_Rol, Enum_EstadoUsuario, Enum_EstadoProyecto,Enum_FaseProyecto, Enum_TipoObjetivo, Enum_EstadoInscripcion  };