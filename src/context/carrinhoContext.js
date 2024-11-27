import React, { createContext, useState, useContext } from "react";

// Criação do contexto
const CarrinhoContext = createContext();

export const useCarrinho = () => {
  return useContext(CarrinhoContext);
};

export const CarrinhoProvider = ({ children }) => {
  const [carrinho, setCarrinho] = useState([]);

  const adicionarAoCarrinho = (produto) => {
    setCarrinho((prevCarrinho) => {
      const produtoExistente = prevCarrinho.find(
        (item) => item.id === produto.id
      );
      if (produtoExistente) {
        return prevCarrinho.map((item) =>
          item.id === produto.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        );
      } else {
        return [...prevCarrinho, { ...produto, quantidade: 1 }];
      }
    });
  };

  const removerDoCarrinho = (id) => {
    setCarrinho((prevCarrinho) =>
      prevCarrinho.filter((item) => item.id !== id)
    );
  };

  return (
    <CarrinhoContext.Provider
      value={{ carrinho, adicionarAoCarrinho, removerDoCarrinho }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
};
