const colors = require( 'colors' );
const argv = require( './config/yargs' ).argv;
const todo = require( './todo/todo' );

let comando = argv._[0];

switch ( comando ) {
    case 'crear':
        let newTodo = todo.crear(argv.descripcion);
        console.log( newTodo );
        break;
    case 'listar':
        let listado = todo.getListado();

        for (let t of listado) {
            console.log( '======= ToDO ======='.green );
            console.log( t.descripcion );
            console.log( 'Estado: ', t.completado );
            console.log( '===================='.green );
        }

        break;
    case 'actualizar':
        let actualizado = todo.actualizar(argv.descripcion, argv.completado);
        console.log( actualizado );
        break;
    default:
        console.log( 'El comando no es reconocido' );
}
