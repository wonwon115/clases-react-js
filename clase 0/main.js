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

let nombre = prompt (" ingrese su nombre")

const saludar = () => {
    alert("Hola " + nombre)
}
saludar()
