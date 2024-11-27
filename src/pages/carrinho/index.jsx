import React from 'react';
import { useNavigate } from 'react-router-dom';

function CarrinhoPage({ carrinho, removerDoCarrinho }) {
  const navigate = useNavigate();

  const irParaFinalizarCompra = () => {
    if (carrinho.length === 0) {
      alert('Seu carrinho está vazio! Adicione produtos antes de finalizar a compra.');
      return;
    }
    navigate('/finalizar-compra'); // Redireciona para a página de finalização
  };

  return (
    <div>
      <h2>Carrinho</h2>
      {carrinho.length === 0 ? (
        <p>Seu carrinho está vazio!</p>
      ) : (
        <div>
          <ul>
            {carrinho.map((produto, index) => (
              <li key={index}>
                {produto.nome} - R${produto.preco.toFixed(2)}
                <button onClick={() => removerDoCarrinho(produto.id)}>Remover</button>
              </li>
            ))}
          </ul>
          <button onClick={irParaFinalizarCompra}>Finalizar Compra</button>
        </div>
      )}
    </div>
  );
}

export default CarrinhoPage;
