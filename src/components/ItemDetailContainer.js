
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ItemDetail } from './ItemDetail'

export const ItemDetailContainer = () => {
  const [load, setLoad] = useState(false)
  const [productos, setProductos] = useState({})

  const {id} = useParams()

  useEffect (() => {
    const prods = fetch (`https://fakestoreapi.com/products/${id}`);
    prods
      .then((res) =>{
          const productos = res.json()
          return productos
      } )
      .then((data) => setProductos(data), 
          setLoad(true))
          .catch ((err) => console.log(err))
          .finally (() => {
            console.log("promesa finalizada")
          } )

  }, [id])
  return (
    <>
    <span>
      <ItemDetail id={id}></ItemDetail>
    </span>
    </>
    
  )
  
   
}
 
  