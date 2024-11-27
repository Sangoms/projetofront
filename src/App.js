import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import FinalizarCompra from './pages/FinalizarCompra/FinalizarCompra'; // Importe o componente FinalizarCompra
import './styles/App.css'; // Certifique-se de que o caminho do CSS esteja correto

function App() {
  const [carrinho, setCarrinho] = useState([]);

  const produtos = [
    { id: 1, nome: 'Iphone 13 Pro', descricao: 'O melhor smartphone', preco: 3349.99, imagem: 'img/produto1.jpeg' },
    { id: 2, nome: 'Notebook Samsung', descricao: 'Desempenho incrível', preco: 4550.75, imagem: '/img/produto2.jpeg' },
    { id: 3, nome: 'Fone Z', descricao: 'Cancelamento de ruído', preco: 280.69, imagem: '/img/produto3.jpeg' },
    { id: 4, nome: 'TV 4K LG', descricao: 'Qualidade de imagem incrível', preco: 2750.89, imagem: '/img/produto4.jpeg' },
  ];

  const adicionarAoCarrinho = (produto) => {
    setCarrinho([...carrinho, produto]);
  };

  const removerDoCarrinho = (id) => {
    setCarrinho(carrinho.filter((produto) => produto.id !== id));
  };

  return (
    <Router>
      <div className="App">
        <header className="header">
          <h1>TechLar</h1>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/produtos">Produtos</Link></li>
              <li><Link to="/carrinho">Carrinho ({carrinho.length})</Link></li>
            </ul>
          </nav>
        </header>

        <main>
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <h2>Bem-vindo à TechLar!</h2>
                  <p>Escolha seus produtos favoritos.</p>
                </div>
              }
            />

            <Route
              path="/produtos"
              element={
                <div>
                  <h2>Produtos</h2>
                  <div className="produtos-lista">
                    {produtos.map((produto) => (
                      <div key={produto.id} className="produto-item">
                        <img src={produto.imagem} alt={produto.nome} className="produto-imagem" />
                        <h4>{produto.nome}</h4>
                        <p>{produto.descricao}</p>
                        <p>R${produto.preco.toFixed(2)}</p>
                        <button onClick={() => adicionarAoCarrinho(produto)}>
                          Adicionar ao Carrinho
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              }
            />

            <Route
              path="/carrinho"
              element={
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
                            <button onClick={() => removerDoCarrinho(produto.id)}>
                              Remover
                            </button>
                          </li>
                        ))}
                      </ul>
                      <Link to="/finalizar-compra">
                        <button>Finalizar Compra</button>
                      </Link>
                    </div>
                  )}
                </div>
              }
            />

            <Route
              path="/finalizar-compra"
              element={<FinalizarCompra carrinho={carrinho} />}
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
