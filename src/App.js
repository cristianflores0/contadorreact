import React, { useState } from 'react';
import './App.css';

function App() {
  const [contador, setContador] = useState(0);

  const incrementarContador = () => {
    setContador(contador + 1);
  };

  const disminuirContador = () => {
    setContador(contador - 1);
  };

  const resetearContador = () => {
    setContador(0);
  };

  return (
    <div className="App">
      <h1>Contador</h1>
      <p>Valor: {contador}</p>
      <button onClick={incrementarContador}>Incrementar</button>
      <button onClick={disminuirContador}>Disminuir</button>
      <button onClick={resetearContador}>Resetear</button>
    </div>
  );
}

export default App;
