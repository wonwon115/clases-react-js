
// opcion N°1 recibimos un objeto 
/* const props = (props) => {
    console.log(props);
  return (
    <div className="container">
        <div className="row">
            <div className="col">
                <h1>Curso {props.academia}</h1>
                <h3>Clase 4 {props.curso}</h3>
                <p>Duracion: {props.duracion} meses</p>
            </div>
        </div>
    </div>
)
} */

const props =({ academia, curso, duracion}) => {
    /* 
    let bebida = {id:1, nombre"Coca-cola"};
    let {nombre} = bebida;
    console.log(nombre);
    */
   return (
       <div className="container">
        <div className="row">
            <div className="col">
                <h1>Curso {academia}</h1>
                <h3>Clase 4 {curso}</h3>
                <p>Duracion: {duracion} meses</p>
            </div>
        </div>
    </div>
   )
}

export default props