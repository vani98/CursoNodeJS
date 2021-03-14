console.log('Inicio de script');

setTimeout(() => {
    console.log("Primer Timeout");
}, 5000);
setTimeout(() => {
    console.log("Segundo Timeout");
}, 0);
setTimeout(() => {
    console.log("Tercer Timeout");
}, 0);

console.log("Fin de script");