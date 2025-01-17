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
        <div className="card col-6 text-center"  onClick={()=>addStore()}>
        <div className="card-body">
          <h4 className="card-title">{model} - {name}</h4>
          <p className="card-text">R$ {price.toFixed(2)}</p>
          
        </div>
      </div>
    )
}

export default VersionItem