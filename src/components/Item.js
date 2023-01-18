import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


export const Item = ({producto}) => {
  return (
    <>
    <Card className='itemCards' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={producto.image} />
      <Card.Body>
        <Card.Title>{producto.title}</Card.Title>
        <Card.Text>{producto.description}</Card.Text>
        <Card.Text>${producto.price}</Card.Text>
        <Button variant="secondary">{<Link to = {"/productos/" + producto.id}>Comprar ahora!</Link>}</Button>
      </Card.Body>
    </Card>
    </>
    
)
  
}
