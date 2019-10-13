import React from 'react'
import {useDispatch} from 'react-redux'


const ColorItem = props =>{

    let id = props.colId
    let name = props.colName
    let price = props.colPrice

    const dispatch = useDispatch()

    function addStore(){
        
        dispatch({type:'ADD_COR',id:id,name:name,price:price})
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

export default ColorItem