import React, { Fragment, useEffect, useState } from 'react';
import Header from './Component/Header';
import ListaHeroes from './Component/ListaHeroes';
import Error from './Component/Error';
import axios from 'axios';


function App() {

  const [heroes, guardarHeroes] = useState([]);
  const [error, guardarError] = useState(false);

  useEffect(() => {

    const consultarApi = async () => {

      //Consultamos la APi
      try{
        const resultado = await axios.get(`http://157.245.138.232:9091/api/v1/test/superheroes/`);
        guardarHeroes(resultado.data.data);
        guardarError(false);
      }
      catch{
        guardarError(true);
      }


    }

    consultarApi();

  }, []);


  //En caso de haber un error mostrar Componente error y si no la lista de hores
  let componente;
  if(error){
    componente = <Error/>
  }
  else
  {
    componente = <ListaHeroes listaHeroes={heroes} />

  }


  return (
    <Fragment>
      <Header />
      {componente}
    </Fragment>
  );
}

export default App;
