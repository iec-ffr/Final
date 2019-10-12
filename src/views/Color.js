import React, { useState, useEffect } from 'react';
import { Colors } from '../api/Colors';
import ColorItem  from '../components/ColorItem/ColorItem';


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
            colors.map(color=>
            
                <ColorItem key={color.id} colName={color.name} colPrice={color.price}/>
            )
        }
        </>
        )
}

export default Color
