import React, { useState } from "react";
import "./App.css";
import "font-awesome/css/font-awesome.min.css";
import { CarrinhoProvider } from "./context/carrinhoContext";


// Cabeçalho
function Header({ abrirCarrinho }) {
  return (
    <header className="header">
      <h1>TechLar</h1>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/produtos">Produtos</a>
          </li>
          <li>
            <button className="btn-cart" onClick={abrirCarrinho}>
              <i className="fa fa-shopping-cart cart-icon"></i> Carrinho
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

// Produtos
function Main({ produtos, adicionarAoCarrinho }) {
  return (
    <section className="produtos-section">
      <h2>Bem-vindo à TechLar!</h2>
      <div className="produtos-lista">
        {produtos.map((produto, index) => (
          <div key={index} className="produto-item">
            <img src={produto.imagem} alt={produto.nome} className="produto-imagem" />
            <h4>{produto.nome}</h4>
            <p>{produto.descricao}</p>
            <p>R${produto.preco}</p>
            <button className="btn" onClick={() => adicionarAoCarrinho(produto)}>
              Adicionar ao Carrinho
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

// Carrinho
function Carrinho({ carrinho, removerDoCarrinho, fecharCarrinho }) {
  return (
    <aside className="carrinho-overlay">
      <button className="btn-voltar" onClick={fecharCarrinho}>
        ← Voltar
      </button>
      <h3>Carrinho</h3>
      {carrinho.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <ul className="carrinho-lista">
          {carrinho.map((produto, index) => (
            <li key={index} className="carrinho-item">
              <img src={produto.imagem} alt={produto.nome} className="carrinho-imagem" />
              <div>
                <h4>{produto.nome}</h4>
                <p>R${produto.preco}</p>
                <button className="btn-remove" onClick={() => removerDoCarrinho(index)}>
                  Remover
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
}

// App
function App() {
  const [carrinho, setCarrinho] = useState([]);
  const [carrinhoAberto, setCarrinhoAberto] = useState(false);

  const produtos = [
    { nome: "Iphone 13 Pro", descricao: "O melhor smartphone", preco: 3349.99, imagem: "/img/produto4.jpeg" },
    { nome: "Notebook Samsung", descricao: "Desempenho incrível", preco: 4550.75, imagem: "/img/produto3.jpeg" },
    { nome: "Fone Z", descricao: "Cancelamento de ruído", preco: 280.69, imagem: "/img/produto2.jpeg" },
    { nome: "TV 4K LG", descricao: "Qualidade de imagem incrível", preco: 2750.89, imagem: "/img/produto1.jpeg" },
  ];

  const adicionarAoCarrinho = (produto) => {
    setCarrinho([...carrinho, produto]);
  };

  const removerDoCarrinho = (index) => {
    const novoCarrinho = carrinho.filter((_, i) => i !== index);
    setCarrinho(novoCarrinho);
  };

  return (
    <CarrinhoProvider>
      <div className="App">
        <Header abrirCarrinho={() => setCarrinhoAberto(true)} />
        <div className="main-container">
          <Main produtos={produtos} adicionarAoCarrinho={adicionarAoCarrinho} />
          {carrinhoAberto && (
            <Carrinho
              carrinho={carrinho}
              removerDoCarrinho={removerDoCarrinho}
              fecharCarrinho={() => setCarrinhoAberto(false)}
            />
          )}
        </div>
      </div>
    </CarrinhoProvider>
  );
}

export default App;
