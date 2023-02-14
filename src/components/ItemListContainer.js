import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ItemList } from './ItemList'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from './Firebase'
import PaginaNoEncontrada from './PaginaNoEncontrada'
import { toast } from 'react-toastify'
import { Container } from 'react-bootstrap'



const ItemListContainer = () => {

    const [load, setLoad] = useState(false)
    const [productos, setProductos] = useState([])
    const {categoria} = useParams()
    const [productoExistente,setProductoExistente] = useState(true)

    useEffect(()=>{
        
        const productosCollection = collection(db,"productos")
        
        let filtro
  
        if (categoria) {
            filtro = query(productosCollection, where('category', '==', categoria))
        } else {
            filtro = productosCollection
        }

        const pedidoFirestore = getDocs(filtro) 
        pedidoFirestore
            .then((respuesta) => {
                const productos = respuesta.docs.map(doc => ({
                ...doc.data(),
                id: doc.id
            }))
            if (!(productos.length === 0)){
                setProductos(productos)
                setProductoExistente(true) 
            } else {
                setProductoExistente(false)  
            }
            setLoad(true)
            })

            .catch((error) => {
                console.log(error)
                toast.dismiss()
                toast.error('Hubo un error, porfavor vuelva a intentarlo!')
            })


    }, [categoria])

    return (
        <>
        {load ? productoExistente ? <ItemList productos={productos}/> : <PaginaNoEncontrada/>
            : <Container className='loadingPages'>Cargando...</Container>}
        </>
    )
   
          
}

export default ItemListContainer