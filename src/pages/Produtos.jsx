import React from 'react';

// Componente Produtos
function Produtos({ produtos, adicionarAoCarrinho }) {
  return (
    <section className="produtos-section">
      <h2>Bem-vindo à TechLar!</h2>
      <div className="produtos-lista">
        {produtos.map((produto, index) => (
          <div key={index} className="produto-item">
            <img
              src={produto.imagem}
              alt={produto.nome}
              className="produto-imagem"
            />
            <h4>{produto.nome}</h4>
            <p>{produto.descricao}</p>
            <p>R${produto.preco}</p>
            <button
              className="btn"
              onClick={() => adicionarAoCarrinho(produto)}
            >
              Adicionar ao Carrinho
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Produtos;