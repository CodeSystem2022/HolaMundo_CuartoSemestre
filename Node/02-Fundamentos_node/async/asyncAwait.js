// La palabra async NO es necesaria en las funciones porque ya son asíncronas
// Igual, proyectan una sincronia visual

async function hola(nombre) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('Hola ' + nombre);
            resolve(nombre);
        }, 1000);
    })
}

async function hablar(nombre) {
    return new Promise( (resolve, reject) => { // usamos la sintaxis ES6
        setTimeout(function () {
            console.log('bla bla bla');
            resolve(nombre);
        }, 1000);
    });
}

//Función asincrona - adios
async function adios(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log('Adiós ' + nombre); // concatena
            //resolve();
            reject('Hay un error');
        }, 1000);
    });

}//await hola('Ariel'); // esto es una mala syntaxis
//await es válido solo dentro de una función asíncrona
async function main() {
    let nombre = await hola('Ariel');
    await hablar();
    await hablar();
    await hablar();
    await adios(nombre);
    console.log('Termina el proceso...');

}

//console.log('Empezamos el proceso...');

// main();

//console.log('Esta va a ser la segunda instrucción');

// Código en inglés. Es asíncrono y retorna una promesa. 

function sayHello(name) {
    return new Promise((resolve, reject) => { // usamos la sintaxis ES6
        setTimeout(function () {
            console.log('Hello ' + name);
            resolve(name);
        }, 1000);
    });
}

function talk(name) {
    return new Promise((resolve, reject) => { // usamos la sintaxis ES6
        setTimeout(() => {
            console.log('bla bla bla');
            resolve(name);
        }, 1000);
    });
}

function sayBye(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Goodbye ' + name); 
            resolve(name);
            //reject('Hay un error');
        }, 1000);
    });
}

async function conversation(name) {
    console.log('Code in english');
    console.log('Starting async process...');
    await sayHello(name);
    await talk();
    await talk();
    await talk();
    await sayBye(name);
    console.log('Process completed')

}

