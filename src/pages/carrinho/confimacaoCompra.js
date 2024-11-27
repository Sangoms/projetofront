// src/pages/Carrinho/ConfirmacaoCompra.js

import React from "react";
import { Link } from "react-router-dom";
import "./ConfirmacaoCompra.css"; // Opcional: para estilos específicos

function ConfirmacaoCompra() {
  return (
    <div className="confirmacao-compra-container">
      <h1>Compra Concluída!</h1>
      <p>Obrigado por comprar na TechLar! Seus produtos estão a caminho.</p>
      <Link to="/" className="btn-voltar-home">
        Voltar para a Home
      </Link>
    </div>
  );
}

export default ConfirmacaoCompra;
