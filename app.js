const argv = require( './config/yargs' ).argv;

let comando = argv._[0];

switch ( comando ) {
    case 'crear':
        console.log( 'Crear ToDo' );
        break;
    case 'listar':
        console.log( 'Listar ToDo' );
        break;
    case 'actualizar':
        console.log( 'Actualizar ToDo' );
        break;
    default:
        console.log( 'El comando no es reconocido' );
}
