import React, { Suspense, lazy } from "react";
import { Provider } from "react-redux";
import {ApplicationRoutes} from './ApplicationRoutes';
import  Nav from './components/Nav/Nav'
import  store  from "./store";
import './assets/bootstrap/bootstrap.css'
import './assets/css/style.css'

function App(){
  return(
    <Provider store = { store }>
      <div className="container">
        <Suspense fallback = { <h1>Loading...</h1> }>
          <div className="text-center col-12">
            <h1>Car Shopping React</h1>
          </div>
          <Nav/>        
          <ApplicationRoutes />
        </Suspense>
      </div>      
    </Provider>
  );
}

export default App;
