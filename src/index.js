import React from 'react';
import ReactDOM from 'react-dom/client';
import Jogo from "./Jogo.js"
import Letras from "./Letras.js"
import palavras from "./palavras.js"

function App(){
  return(
    <>
    <Jogo />
    <Letras />
    </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
