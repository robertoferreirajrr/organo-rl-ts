import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//Esse é o bootstrap da aplicação
//Javascript puro = Vanilla
//React = Biblioteca (ele serve uma proposta específica! E por causa disso ele é maleável e fexlível)\
//O index.html é o DOM real e o ReactDOM.createRoot é o virtualDOM
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  //Em ambiente de desenvolvimento ele vai nos dar mensagem de erros mais amigáveis!
  //Logs de warn e etc no console do navegador
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//Performance e etc..
//reportWebVitals();
