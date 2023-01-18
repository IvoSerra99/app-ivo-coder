import React from 'react'
import { Link } from 'react-router-dom'


const Navs = () => {
  return (
  <nav>
  <Link to={"/productos/hombres"}>hombres</Link>
  <Link to={"/productos/mujeres"}>Mujer</Link>
  <Link to={"/productos/joyas"}>Joyas</Link>
  </nav>
     
  )
}

export default Navs