const fs = require( 'fs' );

 let arrTodo = [];

 const guardarDB = () => {
     let data = JSON.stringify(arrTodo);

     fs.writeFile('./db/data.json', data, (err) => {
         if (err) throw new Error('Error al guardar los datos' + err);
     })
 };
 
 const cargarDB = () => {
     try {
        arrTodo = require('../db/data');
     } catch ( e ) {
         arrTodo = [];
     }
 };

 const crear = (descripcion) => {
     cargarDB();

     let todo = {
         descripcion,
         completado: false
     };

     arrTodo.push(todo);

     guardarDB();

     return todo;
 };

 const getListado = () => {
     cargarDB();
     return arrTodo;
 };

 module.exports = {
     crear,
     getListado
 };
