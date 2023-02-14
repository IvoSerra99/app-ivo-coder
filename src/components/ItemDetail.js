import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ItemCount from './ItemCount';
//import { db } from './firebase';


export const ItemDetail = ({producto}) => { 
  return (
    <>
    <Card style={{ width: '18rem' }}>
      <Card.Img src={producto.image} />
      <Card.Body>
        <Card.Title>{producto.title}</Card.Title>
        <Card.Text>{producto.description}</Card.Text>
        <Button variant="secondary">Añadir al carrito!</Button>
        <ItemCount/>
      </Card.Body>
      
    </Card>
    </>
  );
}

