import React, { useState, useEffect } from 'react';
import { Optionals } from '../api/Optionals';
import OptionalItem  from '../components/OptionalItem/OptionalItem';


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
            optionals.map(optional=>
            
                <OptionalItem key={optional.id} optName={optional.name} optPrice={optional.price}/>
            )
        }
        </>
        )
}

export default Optional
