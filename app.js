const argv = require( './config/yargs' ).argv;
const todo = require( './todo/todo' );

let comando = argv._[0];

switch ( comando ) {
    case 'crear':
        let newTodo = todo.crear(argv.descripcion);
        console.log( newTodo );
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
