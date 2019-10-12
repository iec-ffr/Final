import React from "react";
import { Route } from "react-router-dom";
import { Modelo} from './views/Modelo'
import Version from './views/Version'
import Color from './views/Color'
import  Optional from './views/Optional'
import  Resum from './views/Resum'



export const ApplicationRoutes = () => (
  <>
    <Route path="/modelos" exact component={Modelo} />
    <Route path="/versoes" exact component={Version} />
    <Route path="/cores" exact component={Color} />
    <Route path="/opcionais" exact component={Optional} />
    <Route path="/resumo" exact component={Resum} />

  </>
);
