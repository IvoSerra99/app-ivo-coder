import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { db } from './firebase'
import { ItemList } from './ItemList'

const ItemListContainer = () => {
    const [load, setLoad] = useState(false)
    const [productos, setProductos] = useState([])
    const {categoria} = useParams()
    useEffect(()=>{
        const web = categoria ? `https://fakestoreapi.com/products/category/${categoria}` : "https://fakestoreapi.com/products"
        const pedido = fetch(web)
        pedido
        .then ((respuesta)=>{
            const productos = respuesta.json()
            return productos
        })
        .then((productos)=> {
            console.log(productos)
            setProductos(productos)
            setLoad(true)
        })
        .catch((error)=> {
            console.log(error)
        })

    }, [categoria])

    return (
        <>
        <div className='itemListContainer-Container'>
            {load ? "" : "cargando..."}
            <ItemList productos = {productos}/>
        </div>
        </>
    )
   
          
}

export default ItemListContainer