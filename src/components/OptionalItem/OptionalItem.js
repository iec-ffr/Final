import React from 'react'
import {useDispatch} from 'react-redux'


const OptionalItem = props =>{

    let id = props.optId
    let name = props.optName
    let price = props.optPrice

    const dispatch = useDispatch()

    function addStore(){
        
        dispatch({type:'ADD_OPICIONAL',id:id,price:price,name:name})
    }

    return(
       <div onClick={()=>addStore()}>
           <h1>{name}</h1>
           <small>R$ {price.toFixed(2)}</small>
       </div>
    )
}

export default OptionalItem