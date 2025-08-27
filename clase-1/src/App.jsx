import { useState } from 'react'
import './App.css'

function App() {

  let curso = "Curso de React JS"
  let alumnos = 50

  return(
    <>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJnuwbl3PND_4HhIDgveJbi2eiNlGTmZLjRQ&s" alt="CoderHouse" />
    <h1>Hola a todos</h1>
    <p>Estamos haciendo el <b>{curso.toUpperCase()}</b></p>
    <p>Alumnos: {alumnos * 3}</p>
    </>
  )

  let temperatura =10
/*   if (temperatura > 30){
    return ( 
      <>
      <h1 className=''>hace calor</h1>
      </>
    )
  } else{
    return(
      <>
      <h1 className=''>hace frio</h1>
      </>
    )
  } */
 return(
  <>
  <h1 className='text-danger'>{temperatura > 30 ? 'hace calor' : 'hace frio'}!</h1>
  </>
 )
  
}

export default App
