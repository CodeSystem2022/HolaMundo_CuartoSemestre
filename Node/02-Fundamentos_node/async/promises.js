/*
 Conceptos básicos: Un método o proceso síncrono se le denomina cuando un proceso se ejecuta después de otro bajo una secuencia o sincronización, por lo que 
 un proceso asíncrono, no se encuentra bajo ninguna secuenciay se ejecuta de manera separada la resto de los procesos, 
 lo cual quiere decir que no espera ningún otro proceso.

Generalmente, los proceso asíncronos se encargan de realizar operaciones de entrada/salida, peticiones a servidores o lectura y escritura 
de archivos en disco.

La mejor manera de manejar los procesos asíncronos es mediante las promesas, debido a que el método de callbacks presenta ciertas desventajas, 
los llamados CallBackHell o Pyramid of Doom .

Una promesa en Nodejs, se puede manipular mediante la palabra reservada promise y se encuentra conformada principalmente por retornar 
dos valores de respuesta: resolve() que devuelve el valor cuando es exitosa la operación realizada de la tarea asíncrona y reject() 
cuando la operación arroja algún error.
*/

function hola(nombre) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('Hola ' + nombre);
            resolve(nombre);
        }, 1000);
    })
}

function hablar(nombre) {
    return new Promise( (resolve, reject) => { // usamos la sintaxis ES6
        setTimeout(function () {
            console.log('bla bla bla');
            resolve(nombre);
        }, 1000);
    });
}

//Función asincrona - adios
function adios(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log('Adiós ' + nombre); // concatena
            //resolve();
            reject('Hay un error');
        }, 1000);
    });
}

//llamamos a la función
console.log('Iniciando el proceso...');
hola('Ariel')
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(adios) //.then retorna un valor
    .then((nombre) => {
        console.log('Terminando el proceso');
    })
    .catch(error => {
        console.log('Ha habido un error: ');
        console.log(error);
    })
