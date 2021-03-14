const personaje = {
    nombre: "Pepe",
    apellido: "Argento",
    profesion: "Zapatero",
    getDescripcion(){
        return `${nombre} ${apellido} es ${profesion}`
    }
};

//quiero usar estos valores en mi código

//como era antes
// const nombre = personaje.nombre;
// const apellido = personaje.apellido;
// const profesion = personaje.profesion;

//Destructuring
const{nombre,apellido,profesion,edad=50} = personaje;

console.log(nombre);
console.log(apellido);
console.log(profesion);

const imprimirPersonaje = (personaje) => {
    console.log(nombre,apellido,profesion,edad);
}
imprimirPersonaje();

//Destructurar con Array

const personajes2 = ["Pepe","Moni","Koki"];

const [,,p3] = personajes2;

console.log(p3);

