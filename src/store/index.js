import { createStore } from 'redux';
import { arrayExpression } from '@babel/types';

let resumo = {
  modelo: "1",
  versao:"2",
  cor:"3",
  opicional:[1,2],
  total:0
};

function resum(state = resumo, action) {
   
  switch (action.type) {
    case 'ADD_MODELO': 
      resumo.modelo = action.model   
      resumo.total += action.price  
      return resumo
    case 'ADD_VERSAO': 
      resumo.versao = action.model +" - "+ action.name  
      resumo.total += action.price       
      return resumo
    case 'ADD_COR':  
      resumo.cor = action.name 
      resumo.total += action.price        
      return resumo
    case 'ADD_OPICIONAL':  
      resumo.opicional = 1
      resumo.total += action.price  
      return resumo
    default:
      return resumo;
  }
}

const store = createStore(resum);

export default store;