import React from 'react';
import ReactDOM from 'react-dom/client'; // Para React 18 (use 'react-dom' para versões anteriores)
import './index.css'; // Estilos globais
import App from './App'; // Componente raiz da aplicação

// Criação do root para React 18
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderização do componente App dentro do root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
