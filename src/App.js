import React, { Suspense, lazy } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Link } from "react-router-dom";
import  store  from "./store";

function App(){
  return(
    <Provider store = { store }>
      <div>
        <Suspense fallback = { <h1>Loading...</h1> }>
          <h1>Car Shopping React</h1>
          <BrowserRouter>
            <div>
              <Link to="/">Modelo</Link>            
              <Link to="/">Versão</Link>    
              <Link to="/">Cor</Link>    
              <Link to="/">Opcionais</Link>    
              <Link to="/">Resumo</Link>    
            </div>            
          </BrowserRouter>
        </Suspense>
      </div>      
    </Provider>
  );
}

export default App;
