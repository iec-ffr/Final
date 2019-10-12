import React from 'react'
import { Link } from "react-router-dom";

const Nav = () =>{

    return(
        <>
        <Link to="/modelos">Modelo</Link>
        <Link to="/versoes">Versão</Link>
        <Link to="/cores">Cor</Link>
        <Link to="/opcionais">Opcionais</Link>
        <Link to="/resumo">Resumo</Link>
        
        </>
    )
}

export default Nav