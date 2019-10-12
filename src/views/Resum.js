import React from 'react'
import {useSelector} from 'react-redux'
const Resum = () =>{
    const modelo = useSelector(state=>state.modelo)
    const versao = useSelector(state=>state.versao)
    const cor = useSelector(state=>state.cor)
    const opicional = useSelector(state=>state.opicional)
    return(
        <>
            <table border='1'>
                <tr>
                    <td>Modelo</td>
                    <td>Versão</td>
                    <td>Cor</td>
                    <td>Opicionais</td>
                </tr>
                <tr>
                    <td>{modelo}</td>
                    <td>{versao}</td>
                    <td>{cor}</td>
                    <td>{
                        opicional.map(o=>o)
                    }</td>
                </tr>
            </table>
        </>
    )
}

export default Resum