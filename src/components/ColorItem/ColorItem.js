import React from 'react'


const ColorItem = props =>{

    let name = props.colName
    let price = props.colPrice


    return(
       <div>
           <h1>{name}</h1>
           <small>R$ {price.toFixed(2)}</small>
       </div>
    )
}

export default ColorItem