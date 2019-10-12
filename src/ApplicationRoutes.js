import React from "react";
import { Route } from "react-router-dom";
import { Modelo} from './views/Modelo'


export const ApplicationRoutes = () => (
  <>
    <Route path="/modelos" exact component={Modelo} />
  </>
);
