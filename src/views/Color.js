import React, { useState, useEffect, Suspense,lazy } from 'react';
import { Colors } from '../api/Colors';
import Resum from '../components/Resum/Resum';
import { Load } from '../components/Load/Load';
const ColorItem = lazy(() => import('../components/ColorItem/ColorItem'));


const Color = () => {
    const [colors, setColors] = useState([]);

    function startUp(){
        
        let c = Colors.getColors();
        
        c.then(
            function(data){
                setColors(data.items);
            }
        )
    }
    useEffect(() => startUp(),[])

    return (
        <>
        {
            
            <div className="row">
            {colors.map(color=>
            
            <Suspense fallback={<Load />}>
                <ColorItem key={color.id} colId={color.id} colName={color.name} colPrice={color.price}/>
                </Suspense>
            )}
            </div>
        }

        <Resum/>
        </>
        )
}

export default Color
