import React from 'react'

const ParentComponet = (texto) => {
  return (
    <div>ParentComponet</div>
  )
} 
const Boton = ({callback}) => {
    return (
        <button onClick={callback}>Hace Click </button>
    )
}
 
export default ParentComponet