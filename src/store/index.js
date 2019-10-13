import { createStore } from 'redux';


let resumo = {
  modelo: "",
  modeloP: 0,
  versao:"",
  versaoP:0,
  cor:"",
  corP:0,
  opicional:[],
  total:0
};
let optTemp =[];

function calcular(){

  let total = 0;
  total += parseFloat(resumo.modeloP)
  total += parseFloat(resumo.versaoP)
  total += parseFloat(resumo.corP)
  /**
   * se algum campo for adicionado no array de opcional é necessario mudar aqui
   */
  resumo.opicional.map(o=>
    total += parseFloat(o[1])
    )

  return total

}



function resum(state = resumo, action) {
   
  switch (action.type) {
    case 'ADD_MODELO': 
      resumo.modelo = action.model   
      resumo.modeloP = action.price   
      
      /**
       * se trocar modelo a versão é apagada
       */
      resumo.versao = ""
      resumo.versaoP = 0

      resumo.total = calcular()  
      return resumo
    case 'ADD_VERSAO': 
      resumo.versao = action.model +" - "+ action.name  
      resumo.versaoP = action.price
      resumo.total = calcular()      
      return resumo
    case 'ADD_COR':  
      resumo.cor = action.name 
      resumo.corP = action.price
      resumo.total = calcular()        
      return resumo
    case 'ADD_OPICIONAL':  
      optTemp.push([action.name,action.price,action.id])
      resumo.opicional = optTemp
      resumo.total = calcular()   
      return resumo
    case 'REM_OPICIONAL':
      console.log(optTemp)
      for(let i in optTemp ){
        if(optTemp[i][2] == action.id){
          optTemp.splice(i,1)
        }
      }
      resumo.opicional = optTemp
      resumo.total = calcular() 
      return resumo
    default:
      return resumo;
  }
}

const store = createStore(resum);

export default store;
