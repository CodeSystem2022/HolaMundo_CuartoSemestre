// traemos el módulo de file system
// sirve para trabajar y manipular archivos de nuestro sistema

const fs = require('fs'); //ya viene instalado en el core de Node

// primero, leemos el archivo.txt

function leer(ruta, cb){

    fs.readFile(ruta, (err,data) =>{

        cb(data,toString());

    } )

}leer ('${__dirname})/archivo.txt', console.log); //Sintaxis CS6


//Segundo, escribimos en el archivo.txt
function escribir(ruta, contenido){
    fs.writeFile(ruta, contenido, function(err) {
        if (err) {
            console.log("No se pudo escribir", err);
        } else {
            console.log("Se ha escrito correctamente");
        }
     });
}

// Tercero, eliminamos el archivo1.txt
function borrar(ruta, cb){
    fs.unlink(ruta, cb); //elimina de manera asíncrona
}

borrar(`${__dirname}/archivo1.txt`, console.log);

//escribir(`${__dirname}/archivo1.txt`, 'Reescribimos el archivo', console.log);
//leer(`${__dirname}/archivo.txt`, console.log); //Sintaxis ES6