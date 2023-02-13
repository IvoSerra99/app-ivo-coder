import React from 'react'
import { NavLink } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';


const Navs = () => {
  return (
  <nav>
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Categorias
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <NavLink to={"category/men's clothing"}>
          <Dropdown.Item href="#/action-1">Hombres</Dropdown.Item>
        </NavLink>
        <NavLink to={"category/women's clothing"}>
          <Dropdown.Item href="#/action-2">Mujeres</Dropdown.Item>
        </NavLink>
        <NavLink to={"category/jewelery"}>
          <Dropdown.Item href="#/action-4">Joyas</Dropdown.Item>
        </NavLink>
      </Dropdown.Menu>
    </Dropdown>
  </nav>
     
  )
}

export default Navs