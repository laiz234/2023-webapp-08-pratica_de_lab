import { useState } from "react";
import "./App.css";

const AppNavBar = () => {
	return (
		<div className="card">
			<h1>Lista das siglas das Unidades Federativas</h1>
		</div>
	);
};

const AppUFLista = (props: any) => {
  return (
    <ul>
      <li>{props.sigla}</li>
    </ul>
  );
};

const AppUFDetalhe = (props: any) => {
  return (
    <div className="card">
        <button onClick={props.funcao}>Pegar siglas</button>
      </div>
    )
  }
  
  const App = () => {
    const [ufs, setUFs] = useState ([
      {
        "sigla": "RN",
        "nome" : "Rio Grande do Norte"
      },
      {
        "sigla" : "PE",
        "nome" : "Pernambuco"
      },
      {
        "sigla" : "SP",
        "nome" : "São Paulo"
      }
    ]);
    
    const funcao = () =>{
      ufs.map( (uf, indice) => (<AppUFLista key={indice} sigla={uf.sigla}> </AppUFLista> ))
    }
    
    return (
      <>
			<AppNavBar />
      <AppUFDetalhe funcao={funcao}/>
		</>
	);
};

export default App;