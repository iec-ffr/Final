import React from 'react'
import {useDispatch} from 'react-redux'


const VersionItem = props =>{

    let id = props.verId
    let model = props.verModel
    let name = props.verName
    let price = props.verPrice


    const dispatch = useDispatch()

    function addStore(){
        
        dispatch({type:'ADD_VERSAO',id:id,model:model,name:name,price:price})
    }

    return(
       <div onClick={()=>addStore()}>
           <h1>{model} - {name}</h1>
           <small>R$ {price.toFixed(2)}</small>
       </div>
    )
}

export default VersionItem