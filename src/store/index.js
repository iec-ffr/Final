import { createStore } from 'redux';
import { arrayExpression } from '@babel/types';

let resumo = {
  modelo: "",
  versao:"",
  cor:"",
  opicional:[],
  total:0
};
let optTemp = [];

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
      optTemp.push(action.name)
      resumo.opicional = optTemp
      resumo.total += action.price  
      return resumo
    default:
      return resumo;
  }
}

const store = createStore(resum);

export default store;