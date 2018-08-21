const argv = require( 'yargs' )
                    .command('crear', 'Crear ToDo', {
                        descripcion: {
                            demand: true,
                            alias: 'd',
                            desc: 'Descripcion del ToDo'
                        }
                    })
                    .command('actualizar', 'Actualiza el estado del ToDo', {
                        descripcion: {
                            demand: true,
                            alias: 'd',
                            desc: 'Descripcion del ToDo'
                        },
                        completado: {
                            default: true,
                            alias: 'c',
                            desc: 'Marca como completado el ToDo'
                        }
                    })
                    .command('eliminar', 'Elimina un ToDo', {
                        descripcion: {
                            demand: true,
                            alias: 'd',
                            desc: 'Descripcion del ToDo'
                        }
                    })
                    .help()
                    .argv;



module.exports = {
    argv
};
