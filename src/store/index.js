import { createStore } from 'redux';

let teste = {
  count: 1
};

function resum(state = teste, action) {
   
  switch (action.type) {
    case 'ADD_COUNT': 
      teste.count++     
      return teste
    default:
      return state;
  }
}

const store = createStore(resum);

export default store;