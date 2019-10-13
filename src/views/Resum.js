import React from 'react'
import {useSelector} from 'react-redux'
const Resum = () =>{
    const modelo = useSelector(state=>state.modelo)
    const modeloP = useSelector(state=>state.modeloP)
    const versao = useSelector(state=>state.versao)
    const versaoP = useSelector(state=>state.versaoP)
    const cor = useSelector(state=>state.cor)
    const corP = useSelector(state=>state.corP)
    const opicional = useSelector(state=>state.opicional)
    const total = useSelector(state=>state.total)
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
                    <td>Opicionais:{opicional}</td>
                    <td>
                        R$ {total}
                    </td>
                </tr>
                <tr>
                    <td>Total</td>
                    <td>
                        R$ {total}
                    </td>
                </tr>
                </tbody>
            </table>
        </>
    )
}

export default Resum