//set time out es una función que va a ejecutar una funcion callback en un determinado tiempo
//el primer parámetro es la función callback y el segundo es el tiempo

// setTimeout(()=>{
//     console.log("Hola mundo");
// },2000);

//esto es lo mismo que hacer esto

const saludar = ()=>{
    console.log("hola mundo");
};

//toma la función como parámetro y a los 2s la ejecuta
// setTimeout(saludar,2000);

const getUsuarioById = (id,callback)=>{
    const user = {
        id,
        nombre:"Vani"
    }
    setTimeout(()=> callback(user),1000);
}

// le ingreso el id a getUsuarioById y el callback que es la función que trae el user acá, este user lo trae ya cuando la función anterior tiene el id cargado, entonces manda todo junto.
//Sirve para poder hacer todo de manera asincrónica y no tener un undefined, sino mostrar todo cuando esté preparado.

getUsuarioById(10,({nombre,id})=> console.log(`Usuario obtenido desde callback: ${nombre.toUpperCase()}, con el id ${id}`));


