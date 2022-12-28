import React from 'react'

const ItemListContainer = (parametro) => {
    if (parametro.greeting){
        return (
            <>
            <p>
            Bienvenidos a Sneakers!
            </p>
            </>
        )
    }else{
        return (
            <>
            <p>
            no pudimos enviar el saludo
            </p>
            </> 
        )
    }
  
}

export default ItemListContainer