import React, { Suspense, lazy } from "react";
import { Provider } from "react-redux";
import {ApplicationRoutes} from './ApplicationRoutes';
import  Nav from './components/Nav/Nav'
import Resum from './views/Resum'
import  store  from "./store";


function App(){
  return(
    <Provider store = { store }>
      <div>
        <Suspense fallback = { <h1>Loading...</h1> }>
          <h1>Car Shopping React</h1>
          <Nav/>        
          <ApplicationRoutes />
          <h2>Resumo Tempo Real</h2>
          <Resum/>
        </Suspense>
      </div>      
    </Provider>
  );
}

export default App;
