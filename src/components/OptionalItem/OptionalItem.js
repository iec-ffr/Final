import React from 'react'


const OptionalItem = props =>{

    let name = props.optName
    let price = props.optPrice


    return(
       <div>
           <h1>{name}</h1>
           <small>R$ {price.toFixed(2)}</small>
       </div>
    )
}

export default OptionalItem