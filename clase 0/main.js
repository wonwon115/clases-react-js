// funciones
// opcion #1 => utilizando la palacbra funcion
/* function saludar(){
   alert("Hola a Todos")
   } */
// opcion #2 => creando una funcion anonima 

/* const saludar = cunction(){
    alert("hola a todos! #3")
}
 */
// opcion #3 creando una funcuin flecha o arrow 

/* let nombre = prompt (" ingrese su nombre")

const saludar = (name) => {
    alert("Hola " + name)
}
saludar(nombre) */
 
function calcular(valor1, valor2){
    return valor1 + valor2
}
let resultado = calcular (10, 20 )
console.log("El resultado es: " + resultado) // = 30
console.log("El resultado es: " + calcular(20, 30)) // = 50

function mostrarMensaje(){
    let contenido ='<div class="alert alert-success" role="alert"> + mensaje + </div>'

    document.getElementById("mensaje").innerHTML = contenido
}
mostrarMensaje("Estamos cursando React JS en CoderHouse")