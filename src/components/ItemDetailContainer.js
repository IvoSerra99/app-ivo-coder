
import { getDoc, doc } from 'firebase/firestore'
import { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { db } from './Firebase'

import { ItemDetail } from './ItemDetail'
import PaginaNoEncontrada from './PaginaNoEncontrada'

export const ItemDetailContainer = () => {
  const [load, setLoad] = useState(false)
  const [producto, setProducto] = useState({})
  const [idExistente, setIdExistente] = useState({})

  const {id} = useParams()

  useEffect (() => {
          const docRef = doc(db,"productos",id)
        const stock = getDoc(docRef)
        stock
        .then((respuesta) =>{
            const producto = respuesta
            return producto               
        })
        .then((producto)=>{
            if (producto.exists()){
                setProducto({
                    id:producto.id,
                    title:producto.get('title'),
                    image:producto.get('image'),
                    category:producto.get('category'),
                    description:producto.get('description'),
                    price:producto.get('price')
                })
            } else {
                setIdExistente(false)
            }
            setLoad(true)
        })
        .catch((error) =>{
            console.log(error)
            toast.dismiss()
            toast.error('¡Ups! parece que hubo un error. ¡Vuelve a intentarlo!')
        })

  }, [id])
  return (
    <>
     {load  
                ?   idExistente ? <ItemDetail producto={producto}/> : <PaginaNoEncontrada/>
                :   <Container className='loadingPages'>Cargando...</Container>
            }
    </>
    
  )
  
   
}
 
  