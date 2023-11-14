console.log("Hello JS")

//Comentario de una linea

/*
    comentario
    multilinea 
*/

//variables

//let puntosVida
let saldo = 234
//let saldo -- dos variables no pueden tener el mismo nombre

//let dato = 1
/*
var demo = 45 😁
let demo1 = 😒
const demo2 = 56 😎
const dato = 56
*/

dato = 12.4
dato = "hola"
dato = "@"
dato = true
dato = [12,true,89]
dato = {
    nombre: "Melany",
    edad: 22
}

console.log(dato);

//String
let nombreJuego = "Mario Kart" 
console.log(typeof nombreJuego)

console.log("Número de letras:",nombreJuego.length);
console.log("Encotrar alguna palabra:",nombreJuego.includes("Kart"));
console.log("Convertir a mayúsculas:",nombreJuego.toUpperCase());
console.log("Convertir a minusculas:",nombreJuego.toLowerCase());
console.log("Quitar espacios adelante y atrás:",nombreJuego.trim());
console.log("Reemplazar una palabra:",nombreJuego.replace('Kart','Kart-Rider'));
console.log("Cortar un texto:",nombreJuego.slice(1,6));
console.log("Cortar un texto:",nombreJuego.substring(1,6));
console.log("Cortar un texto:",nombreJuego.charAt(1));
console.log("Repetir un texto:",nombreJuego.repeat(2));
console.log("Dividir un texto:",nombreJuego.split(" "));

//
let puntosVida = "45"

console.log(nombreJuego+" "+puntosVida);
console.log(`${nombreJuego}: ${puntosVida}`);

// Number
const numeroVidas = 20

const numeroPuntos = "20"

console.log(`Total = ${+numeroPuntos+numeroVidas}`)  //signo + transforma un string a number

//Precedencia de los operadores
console.log(3 + 4 * 5)
console.log(4 * 3 ** 2)


// Booleans

let saldoUno = 500
let saldoDos = 1000

if (saldoUno > saldoDos){
    console.log("Pagar")
}
else {
    console.log("Seguir consumiendo")
}

// Operador ternario
const respuesta = saldoUno>saldoDos ? "Pagar" : "Seguir comprando"  // forma resumida de un if
console.log(respuesta)

// Bucles
const tareas = ["trabajar","comer","dormir"]

const usuario = {
    nombre: "Melany",
    skills: true
}

tareas.forEach((t,i)=>console.log(t,i))

for(const t of tareas){
    console.log(t)
}

const nuevasTareas = tareas.map(t=>t.toUpperCase()) // map: se crea un nuevo arreglo para modificar, no se altena el arreglo original
console.log(nuevasTareas)
console.log(tareas)

// Funciones

function declarada (){
    console.log("Funcion declarada")
}
declarada()

const expresada = function(){
    console.log("Funcion expresada")
}
expresada()
    
    //funcion anonima
console.log(
    function(){
        //console.log("hola");
        return "hola"
    }
())

//funcion anonima y autoejecutada
function hello(dato1,dato2="Angular"){
    console.log(dato1+dato2);
}
hello("JS","React")

const precioFinal = function(a,b,...args){  //cuando no se sepa cuantos valores se almacenaran 
    console.log(args);
}
precioFinal(10,20,40,67,89,44)

function hello(){
    return "Hola JS";
}
console.log(hello())

function hello(){
    return function(){
        return "Hello JS"
    }
}
console.log(hello()())


function login (user,password){
    console.log("Usuario y password");
}
const validar = (user,password)=>{
    console.log("Usuario y password")
}
(user,password)=>{
    console.log("Usuario y password")
}

//Objetos