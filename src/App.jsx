import React from "react";
// Estatados 
// O estado de uma aplicação reprsenta as caateristicas dela naquele momento

// const App = () => {

// const ativo = false // false ou true 

//   return(
//     <button disabled={!ativo}>{ativo == true ? 
//       "Botão ativo" : "Botão Inativo"}</button>

//   )
// }

// export default App;

// Hooks
//Os Hooks são funções especiais do React que permitem controlarmos o estado 
//e o ciclo de vida de componentes funcionais. 

// React.useState - É uma função que retorna um Array com 2 valores. O primeiro valor 
//guarda o dado estado atual, que pode ser qualquer tipo de dado como strings, arrays, 
//numeros, boolean, null, undefind ou objetos. O segundo valor é uma função que pode ser 
//utilizada para modificarmos o estado do primeiro valor

//Quando a função de modificação do estado é ativida, todos os componentes que dependerem
// do estado, serão renderizados e os filhos também. É isso que garante a reatividade de 
//componentes funcionais no React.
const App = ()=> {
      // 1°      2°
const [ativo, setAtivo] = React.useState(true) // useState são funções
  // 1° elemento guarda o valor   o 2° valor alterar o 1° elemento 
  const [contar, setContar] = React.useState(0) ;
  return(
    <>
   <button onClick={()=> setAtivo(!ativo)}>
    {ativo ? "Botão Ativo" : "Botão Inativo"}
   </button>

   <button onClick={() => setContar(contar + 1)}>
    {contar}
   </button>
   </>
  )
}

export default App;