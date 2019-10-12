import { createStore } from 'redux';

let resumo = {
  modelo: "1",
  versao:"22",
  cor:"3",
  opicional:["a","b","c","d"]
};

function resum(state = resumo, action) {
   
  switch (action.type) {
    case 'ADD_MODELO': 
    resumo.count++     
      return resumo
    case 'ADD_VERSAO': 
    resumo.count++     
      return resumo
    case 'ADD_COR': 
    resumo.count++     
      return resumo
    case 'ADD_OPCIONAL': 
    resumo.count++     
      return resumo
    default:
      return resumo;
  }
}

const store = createStore(resum);

export default store;