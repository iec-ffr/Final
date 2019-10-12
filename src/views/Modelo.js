import React, { useState, useEffect } from 'react';
import { Cars } from '../api/Cars';
import CarItem  from '../components/CarItem/CarItem';


export function Modelo (){
    const [cars, setCars] = useState([]);

    function startUp(){
        
        let c = Cars.getCars();
        
        c.then(
            function(data){
                setCars(data.items);
            }
        )
    }
    useEffect(() => startUp(),[])

    return (
        <>
        {
            cars.map(car=>
            
                <CarItem key={car.id} carId={car.id} carModel={car.model} carPrice={car.price}/>
            )
        }
        </>
        )
}
