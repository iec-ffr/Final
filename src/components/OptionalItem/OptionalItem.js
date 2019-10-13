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
        <div class="card col-6 text-center"  onClick={()=>addStore()}>
        <div class="card-body">
          <h4 class="card-title">{name}</h4>
          <p class="card-text">R$ {price.toFixed(2)}</p>
        </div>
        </div>
    )
}



export default OptionalItem