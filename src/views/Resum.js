import React from 'react'
import {useSelector} from 'react-redux'

import {useDispatch} from 'react-redux'


const Resum = () =>{
    const modelo = useSelector(state=>state.modelo)
    const modeloP = useSelector(state=>state.modeloP)
    const versao = useSelector(state=>state.versao)
    const versaoP = useSelector(state=>state.versaoP)
    const cor = useSelector(state=>state.cor)
    const corP = useSelector(state=>state.corP)
    const opicional = useSelector(state=>state.opicional)
    const total = useSelector(state=>state.total)

    const dispatch = useDispatch()

    function remover(opt){
        
        dispatch({type:'REM_OPICIONAL',id:opt[2]})
    }


    return(
        <>
            <table border='1'>
                <tbody>
                <tr>
                    <td>Modelo:{modelo}</td>
                    <td>
                        R$ {modeloP}
                    </td>
                </tr>
                <tr>
                    <td>Versão:{versao}</td>
                    <td>
                        R$ {versaoP}
                    </td>
                </tr>
                <tr>
                    <td>Cor:{cor}</td>
                    <td>
                        R$ {corP}
                    </td>
                </tr>  
                <tr>
                  
                    <td>Opicionais:</td>
                    <td>
                    </td>
                </tr>

                {
                    opicional.map((o)=>
                        <tr  onClick={()=>remover(o)}>
                            <td>
                                {o[0]}
                            </td>
                            <td>
                                R${o[1]}
                            </td>
                        </tr>
                    )
                }
                
                <tr>
                    <td>Total</td>
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