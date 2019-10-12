import React from 'react'
import { deflate } from 'zlib'
import { directive } from '@babel/types'


const CartItem = props =>{

    let id = props.carId
    let model = props.carModel
    let price = props.carPrice


    return(
       <div>
           <h1>{model}</h1>
           <small>R$ {price.toFixed(2)}</small>
       </div>
    )
}

export default CartItem