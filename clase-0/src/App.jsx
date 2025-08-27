import { useState } from 'react'
import './App.css'
import component from './component'

function App() {
  let students = 50

  return (
    <>
    <div>
      <h1 className='coderhouse' >Clases O</h1>
      <h2>curso de react JS</h2>
      <p>Alumnos: {students} </p>
    </div>
    <component/>
    </>
  )
}

export default App
