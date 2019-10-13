import React from 'react'
import { Link } from "react-router-dom";

const Nav = () =>{

    return(
        <>


<ul className="nav justify-content-center">
  <li className="nav-item">
  <Link  className="nav-link" to="/modelos">MODELO</Link>
  </li>
  <li className="nav-item">
  <Link  className="nav-link"  to="/versoes">VERSÃO</Link>
  </li>
  <li className="nav-item">
  <Link  className="nav-link"  to="/cores">COR</Link>
  </li>
  <li className="nav-item">
  <Link  className="nav-link"  to="/opcionais">OPICIONAIS</Link>
  </li>
  <li className="nav-item">
  <Link  className="nav-link"  to="/resumo">RESUMO</Link>
  </li>
</ul>


        
        
        
        
        
        
        </>
    )
}

export default Nav