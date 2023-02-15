import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';



export const Item = ({item}) => {
  
  return (
    <>
    <Card className='itemCards' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>{item.description}</Card.Text>
        <Card.Text>{item.price}</Card.Text>
        
        {<Link to = {"/products/" + item.id}><Button variant="secondary">Comprar ahora!</Button></Link>}
      </Card.Body>
    </Card>
    </>
    
)
  
}
