import { createStore } from 'redux';
import { arrayExpression } from '@babel/types';

let resumo = {
  modelo: "1",
  versao:"2",
  cor:"3",
  opicional:[],
  total:0
};

function resum(state = resumo, action) {
   
  switch (action.type) {
    case 'ADD_MODELO': 
      resumo.modelo = action.id   
      return resumo
    case 'ADD_VERSAO': 
      resumo.versao = action.id       
      return resumo
    case 'ADD_COR':  
      resumo.cor = action.id       
      return resumo
    case 'ADD_OPICIONAL':  
      resumo.opicional.push("{1,2}")
      return resumo
    default:
      return resumo;
  }
}

const store = createStore(resum);

export default store;