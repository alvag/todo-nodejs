const fs = require( 'fs' );

 let arrToDo = [];

 const guardarDB = () => {
     let data = JSON.stringify(arrToDo);

     fs.writeFile('./db/data.json', data, (err) => {
         if (err) throw new Error('Error al guardar los datos: ' + err);
     })
 };
 
 const cargarDB = () => {
     try {
        arrToDo = require('../db/data');
     } catch ( e ) {
         arrToDo = [];
     }
 };

 const crear = (descripcion) => {
     cargarDB();

     let todo = {
         descripcion,
         completado: false
     };

     arrToDo.push(todo);

     guardarDB();

     return todo;
 };

 const getListado = () => {
     cargarDB();
     return arrToDo;
 };

 const actualizar = (descripcion, completado = true) => {
     cargarDB();

     let i = arrToDo.findIndex(t => t.descripcion === descripcion);

     if (i >= 0) {
         arrToDo[i].completado = completado;
         guardarDB();
         return true;
     } else {
         return false;
     }

 };

 module.exports = {
     crear,
     getListado,
     actualizar
 };
