import React from 'react'
import { Link } from 'react-router-dom'


const Navs = () => {
  return (
  <nav>
  <Link to={"category/men's clothing"}>Hombres</Link> 
  <Link to={"category/women's clothing"}>Mujer</Link>
  <Link to={"category/electronics"}>Electronicos</Link>
  <Link to={"category/jewelery"}>Joyas</Link>
  </nav>
     
  )
}

export default Navs