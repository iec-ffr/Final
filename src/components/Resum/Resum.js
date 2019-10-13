import React from 'react'
import {useSelector} from 'react-redux'

import {useDispatch} from 'react-redux'

const Resum = () =>{
    const modelo = useSelector(state=>state.modelo)
    const versao = useSelector(state=>state.versao)
    const cor = useSelector(state=>state.cor)
    const opicional = useSelector(state=>state.opicional)
    const total = useSelector(state=>state.total)

    const dispatch = useDispatch()

    function remover(opt){
        
        dispatch({type:'REM_OPICIONAL',id:opt[2]})
    }

    return(
        <>
            <table border='1'>
                <thead>
                    <tr>
                        <td>Modelo</td>
                        <td>Versão</td>
                        <td>Cor</td>
                        <td>Opicionais</td>
                        <td>Total</td>
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{modelo}</td>
                    <td>{versao}</td>
                    <td>{cor}</td>
                    <td >
                        {
                            opicional.map((o)=>
                                <p  onClick={()=>remover(o)}>{o[0]}</p>
                            )
                        }
                    </td>
                    <td>
                        R$ {total}
                    </td>
                </tr>
                </tbody>
            </table>
            *Para remover o opcional, clique nele.
        </>
    )
}

export default Resum