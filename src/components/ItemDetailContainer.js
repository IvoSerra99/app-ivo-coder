
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ItemDetail } from './ItemDetail'

export const ItemDetailContainer = () => {
  const [load, setLoad] = useState(false)
  const [producto, setProducto] = useState({})

  const {id} = useParams()

  useEffect (() => {
    const prods = fetch (`https://fakestoreapi.com/products/${id}`);
    prods
    .then((res) => res.json())    
    .then((data) => setProducto(data),
        setLoad(true))    
      .catch((err) => console.log(err))
      .finally(() => {
            console.log("promesa finalizada")
          } )

  }, [id])
  return (
    <>
      <ItemDetail producto={producto}></ItemDetail>
    </>
    
  )
  
   
}
 
  