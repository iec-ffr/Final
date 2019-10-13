import React, { useState, useEffect, Suspense,lazy } from 'react';
import { Cars } from '../api/Cars';
import { Load } from '../components/Load/Load';

import Resum from '../components/Resum/Resum';
const CarItem = lazy(() => import('../components/CarItem/CarItem'));

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

            <div className="row">
            {cars.map(car=>
            <Suspense fallback={<Load />}>
                <CarItem key={car.id} carImg={car.img} carId={car.id} carModel={car.model} carPrice={car.price}/>
            </Suspense>
            )}
            </div>
        }

        <Resum/>
        </>
        )
}
