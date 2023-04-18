import React, { useState } from 'react';
import "./App.css";
import Tabla from './Tabla/Tabla';
import Form from './Tabla/Form';

const App = () => {

  const [personas, setPersonas] = useState([]);

  const enviarFormulario = (persona) => {
    setPersonas([...personas, persona]);
  };

  const eliminarPersona = (indice) => {
    setPersonas(personas.filter((personas, i) => i !== indice));
  };

  return (
    <div className='container'>

      <h1>2DAW: Javierrampob React register form</h1>

      <Tabla datosPersonas={personas} eliminarPersona={eliminarPersona} />

      <Form enviarFormulario={enviarFormulario} />
    </div>
  );
};

export default App;
