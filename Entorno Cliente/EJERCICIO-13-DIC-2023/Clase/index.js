// CALLBACK



// SINCRONO 
//  WEB APIS -- DOM  - SETTIME

// setTimeout( function() {
//  console.log("han pasado 5 segundos");
// } ,  1000 );


// let tarea1 = (callback) => {

//    setTimeout(() => {
//     console.log('TAREA1 TERMINADA');
//     callback();


//    } ,6000);

// }

// let tarea2 = (callback) => {
//        setTimeout(() => {
//         console.log('TAREA 2 DEPENDE TAREA1');  
//         callback();
//        }, 5000);  
// }


// let tarea3 = (cb) => {
//     setTimeout(() => {
//         console.log("TAREA 3 DEPENDE TAREA 2");
//         cb();
//     }, 3000);
// }

// let tarea4 = () => {
// console.log("TAREA 4 DEPENDE DE TAREA 3");
// }

// // CALLBACK HELL

// tarea1(function(){
//     tarea2(function(){
//         tarea3(function () {
//             tarea4();
//         });
//     })
// });
// let boton = addEventListener("click", () => {
//     alert("has hecho click");
// });

// let valor = 0;

// for(let i = 0;  i<= 500000000;  i++) {
//   valor += i;  
// //  console.log(valor);
// }
// console.log("HA TERMINADO EL BUCLE");



// let leerDatos = () => {
//     setTimeout( () => {
//         return datos;
//     },2000);
// }
// console.log(leerDatos());

// PROMESAS

let datos = [
    {
        nombre: "Juan",
        apellido:"Garcia"
    
    },
    {
        nombre:"Redu",
        apellido:"Yo mismo"
    }
    
    ];
  
let leerDatos = new Promise((resolve) => {
       setTimeout(() => {
        resolve(datos);
       },0);
});

console.log(leerDatos);

leerDatos.then( (losDatos) => {
    losDatos.forEach(dato => {
        console.log(dato.nombre);
    });
} );









