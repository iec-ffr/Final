import React from 'react'
import {useDispatch} from 'react-redux'


const CarItem = props =>{

    
    let model = props.carModel
    let price = props.carPrice

    const dispatch = useDispatch()

    function addStore(){
        dispatch({type:'ADD_COUNT'})
    }

    return(
       <div onClick={()=>addStore()}>
           <h1>{model}</h1>
           <small>R$ {price.toFixed(2)}</small>
       </div>
    )
}

export default CarItem