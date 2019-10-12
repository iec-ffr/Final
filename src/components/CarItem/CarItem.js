import React from 'react'


const CarItem = props =>{

    
    let model = props.carModel
    let price = props.carPrice


    return(
       <div>
           <h1>{model}</h1>
           <small>R$ {price.toFixed(2)}</small>
       </div>
    )
}

export default CarItem