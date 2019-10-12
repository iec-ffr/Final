import React from 'react'


const VersionItem = props =>{

    
    let model = props.verModel
    let name = props.verName
    let price = props.verPrice


    return(
       <div>
           <h1>{model} - {name}</h1>
           <small>R$ {price.toFixed(2)}</small>
       </div>
    )
}

export default VersionItem