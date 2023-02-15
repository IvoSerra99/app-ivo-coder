import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ItemCount from './ItemCount';
import {useCarrito} from './CartContext';
import CartContext from './CartContext'
//import { db } from './firebase';


export const ItemDetail = ({producto}) => { 
  const {addItem} = useCarrito(CartContext)
  
  
      const handleOnAdd = (count) =>{ 
        console.log(`Se agregaron ${count} de items del producto ${producto.title}`)
        addItem(producto, count)
        }
    
  return (
    <>
    <Card style={{ width: '18rem' }}>
      <Card.Img src={producto.image} />
      <Card.Body>
        <Card.Title>{producto.title}</Card.Title>
        <Card.Text>{producto.description}</Card.Text>
        <Button variant="secondary">Añadir al carrito!</Button>
        <ItemCount 
        stock={producto.stock} initial={1} 
        onAdd={handleOnAdd}
        />
      </Card.Body>
      
    </Card>
    </>
  );
}

