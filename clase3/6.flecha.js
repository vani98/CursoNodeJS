//antes
// function sumar (a,b){
//     return a+b;
// }


//flecha

const sumar = (a,b) => a+b;

console.log(sumar(10,20));

//Ejercicio =========

// función normal

function saludar(nombre){
    return `Hola ${nombre}`;
}

console.log(saludar("Fernando"));

//Lo pasé a flecha

    //revisión y arreglo! Cuando tiene un solo parametro no va () y si no tiene parámetro van solo los () vacíos
const saludar2 = nombre=> `Hola ${nombre}`;
console.log(saludar2("vani"));