import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';


function App() {

  //definir la categoria y noticias
  const [categoria, guardarCategoria] = useState('');
  const [noticias, guardarNoticias] = useState('');

  useEffect(() => {
    const consultarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=ch&category=${categoria}&apiKey=f908b5181c8b42009a48e826782c49a7`;

      const respuesta = await fetch(url);
      const noticias = await respuesta.json();

      guardarNoticias(noticias.articles);
    }
    consultarAPI();
  }, [categoria]);

  return (
    <Fragment>
        <Header 
          titulo='Buscador de Noticias'
        />

        <div className="container white">
          <Formulario 
            guardarCategoria={guardarCategoria}
          />
        </div>
    </Fragment>
  );
}

export default App;
