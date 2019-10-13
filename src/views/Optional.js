import React, { useState, useEffect, Suspense,lazy } from 'react';
import { Optionals } from '../api/Optionals';
import { Load } from '../components/Load/Load';

import Resum from '../components/Resum/Resum';
const OptionalItem = lazy(() => import('../components/OptionalItem/OptionalItem'));

const Optional = () => {
    const [optionals, setOptionals] = useState([]);

    function startUp(){
        
        let o = Optionals.getOptionals();
        
        o.then(
            function(data){
                setOptionals(data.items);
            }
        )
    }
    useEffect(() => startUp(),[])

    return (
        <>
        
        {
            <div className="row">
            {optionals.map(optional=>
            
            <Suspense fallback={<Load />}>
                <OptionalItem key={optional.id} optId={optional.id} optName={optional.name} optPrice={optional.price}/>
            </Suspense>
            )}
            </div>
        }

        <Resum/>

        </>
        )
}

export default Optional
