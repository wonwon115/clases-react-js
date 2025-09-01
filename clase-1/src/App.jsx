import { useState } from 'react'
import './App.css'
import Hamburgesas from './hamburgesas'
import Header from './component/header'

function App() {

  let curso = "Curso de React JS"
  let alumnos = 50

  return(
    <>
      <Header/>
      <Hamburgesas />
    </>
  ) 
}

export default App
