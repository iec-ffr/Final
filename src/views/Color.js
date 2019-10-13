import React, { useState, useEffect } from 'react';
import { Colors } from '../api/Colors';
import ColorItem  from '../components/ColorItem/ColorItem';
import Resum from '../components/Resum/Resum';


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
            
                <ColorItem key={color.id} colId={color.id} colName={color.name} colPrice={color.price}/>
            )}
            </div>
        }

        <Resum/>
        </>
        )
}

export default Color
