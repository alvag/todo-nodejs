const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion del ToDo'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado el ToDo'
};

const argv = require( 'yargs' )
                    .command('crear', 'Crear ToDo', { descripcion })
                    .command('actualizar', 'Actualiza el estado del ToDo', { descripcion, completado})
                    .command('eliminar', 'Elimina un ToDo', { descripcion })
                    .help()
                    .argv;



module.exports = {
    argv
};
