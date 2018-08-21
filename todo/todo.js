const fs = require( 'fs' );

 let arrTodo = [];
 let filePath = './db/data.json';

 const guardarDB = () => {
     let data = JSON.stringify(arrTodo);

     fs.writeFile(filePath, data, (err) => {
         if (err) throw new Error('Error al guardar los datos' + err);
     })
 };

 const crear = (descripcion) => {
     let todo = {
         descripcion,
         completado: false
     };

     arrTodo.push(todo);

     guardarDB();

     return todo;
 };

 module.exports = {
     crear
 };
