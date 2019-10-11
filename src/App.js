import React, { Suspense, lazy } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Store } from "./store";

function App(){
  return(
    <Provider store = { Store }>
      <div>
        <Suspense fallback = { <h1>Loading...</h1> }>
          <h1>Car Shopping React</h1>
          <BrowserRouter>
            <div>
              <Link to="/">Home</Link>            
            </div>            
          </BrowserRouter>
        </Suspense>
      </div>      
    </Provider>
  );
}

export default App;
