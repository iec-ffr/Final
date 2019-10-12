import React from 'react'
import {useSelector} from 'react-redux'
const Resum = () =>{
    const count = useSelector(state=>state.count)
    return(
        <>
            {count}
        </>
    )
}

export default Resum