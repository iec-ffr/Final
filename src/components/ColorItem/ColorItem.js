import React from 'react'
import {useDispatch} from 'react-redux'


const ColorItem = props =>{

    let id = props.colId
    let name = props.colName
    let price = props.colPrice

    const dispatch = useDispatch()

    function addStore(verId){
        
        dispatch({type:'ADD_COR',id:verId})
    }

    return(
       <div onClick={()=>addStore(id)}>
           <h1>{name}</h1>
           <small>R$ {price.toFixed(2)}</small>
       </div>
    )
}

export default ColorItem