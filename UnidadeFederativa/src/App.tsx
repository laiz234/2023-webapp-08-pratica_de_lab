import { useState } from "react";
import "./App.css";

const AppNavBar = () => {
	return (
		<div className="card">
			<h1>Lista de siglas das Unidades Federativas</h1>
		</div>
	);
};

const AppUFLista = (props: any) => {
  return (
    <ul> {props.ufs.map( (item:any, indice) => (
      <li key={indice} onClick={() => (setUF(item))} > {item.sigla} </li> ))} 
    </ul>
    );
};

const AppUFDetalhe = (props: any) => {
  return (
    <div className="card">
        <h2> Sigla: {props.sigla} </h2>
        <p> Nome: {props.nome} </p>
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
      const [uf, setUF] = useState ({})

   return (
      <>
			<AppNavBar />
      <AppUFDetalhe sigla={uf.sigla} nome={uf.nome}/>
      <AppUFLista ufs={ufs}/>

		</>
	);
};

export default App;