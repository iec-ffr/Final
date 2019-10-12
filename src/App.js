import React, { Suspense, lazy } from "react";
import { Provider } from "react-redux";
import {ApplicationRoutes} from './ApplicationRoutes';
import  Nav from './components/Nav'
import { BrowserRouter } from "react-router-dom";
import  store  from "./store";


function App(){
  return(
    <Provider store = { store }>
      <div>
        <Suspense fallback = { <h1>Loading...</h1> }>
          <h1>Car Shopping React</h1>
          <Nav/>        
          <ApplicationRoutes />
        </Suspense>
      </div>      
    </Provider>
  );
}

export default App;
