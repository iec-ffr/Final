import React from 'react'
import {useDispatch} from 'react-redux'


const CarItem = props =>{

    let id = props.carId
    let model = props.carModel
    let price = props.carPrice
    let img = props.carImg

    const dispatch = useDispatch()

    function addStore(){
        
        dispatch({type:'ADD_MODELO',id:id,model:model,price:price,img:img})
    }

    
    return(
      
            <div className="card col-sm-4 text-center" onClick={()=>addStore()}>
                <img className="card-img-top" src={require(`../../assets/images/${img}`)} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{model}</h5>
                    <p className="card-text">R$ {price.toFixed(2)}</p>
                </div>
            </div>
       
    )
}

export default CarItem