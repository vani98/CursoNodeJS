const empleados =[
    {
        id:1,
        nombre:"Fernando"
    },
    {
        id:2,
        nombre:"Marta"
    },
    {
        id:3,
        nombre:"Manuel"
    }
];

const sueldos = [
    {
        id:1,
        sueldo:1500
    },
    {
        id:2,
        sueldo:2000
    }
]

//vamos a hacer una función que reciba como parametro un callback y que devuelva el empleado que recibe.
const getEmpleadoById =(id,callback) =>{
    //del callback compara id de empleados, si se cumple devuelve
    const empleado = empleados.find((e => e.id === id));

    //si encuentro un empleado voy a hacer que ejecute esta función con el empleado que encontré
    if(empleado){
        callback(null,empleado);
        return
    }
    callback(new Error("El empleado no existe"));
};

const id = 4;

//¿que quiero hacer con ese empleado?
getEmpleadoById(id,(error,e)=>{
    if(error){
        console.log("Error");
        console.log(error);
        return;
    }

    console.log(`El empleado: ${e.nombre}...`);
});

//Escribir otra funcion parecida que devuelva en vez del id el salario.