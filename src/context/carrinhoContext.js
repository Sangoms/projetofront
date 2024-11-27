import React, { createContext, useContext, useState } from 'react';

// Criação do contexto
const CarrinhoContext = createContext();

// Provider que vai envolver o aplicativo
export function CarrinhoProvider({ children }) {
  const [carrinho, setCarrinho] = useState([]);

  // Adicionar item ao carrinho
  const adicionarAoCarrinho = (produto) => {
    setCarrinho([...carrinho, produto]);
  };

  // Remover item do carrinho
  const removerDoCarrinho = (id) => {
    setCarrinho(carrinho.filter((produto) => produto.id !== id));
  };

  // Limpar carrinho
  const limparCarrinho = () => {
    setCarrinho([]);
  };

  return (
    <CarrinhoContext.Provider
      value={{ carrinho, adicionarAoCarrinho, removerDoCarrinho, limparCarrinho }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
}

// Hook para acessar o contexto mais facilmente
export function useCarrinho() {
  return useContext(CarrinhoContext);
}

