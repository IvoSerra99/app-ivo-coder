import React from 'react'
import Card from 'react-bootstrap/Card';


export const ItemDetail = (id, productos) => {
  return (
    <Card>
      <Card.Body>{productos.id}</Card.Body>
    </Card>
  )
}
