import React, { useState } from "react";
import "./App.css";
import "font-awesome/css/font-awesome.min.css";
import { CarrinhoProvider } from "./context/carrinhoContext";
 // Não precisa do caminho explícito, só o nome do arquivo
import { Link } from "react-router-dom"; // Importar o Link para navegação do React Router

// Cabeçalho
function Header({ abrirCarrinho }) {
  return (
    <header className="header">
      <h1>TechLar</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link> {/* Link para a Home */}
          </li>
          <li>
            <Link to="/produtos">Produtos</Link> {/* Link para Produtos */}
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

// App
function App() {
  const [carrinho, setCarrinho] = useState([]);
  const [carrinhoAberto, setCarrinhoAberto] = useState(false);
  const [formularioVisible, setFormularioVisible] = useState(false); // Controle do formulário

  const produtos = [
    { nome: "Iphone 13 Pro", descricao: "O melhor smartphone", preco: 3349.99, imagem: "/img/produto4.jpeg" },
    { nome: "Notebook Samsung", descricao: "Desempenho incrível", preco: 4550.75, imagem: "/img/produto3.jpeg" },
    { nome: "Fone Z", descricao: "Cancelamento de ruído", preco: 280.69, imagem: "/img/produto2.jpeg" },
    { nome: "TV 4K LG", descricao: "Qualidade de imagem incrível", preco: 2750.89, imagem: "/img/produto1.jpeg" },
  ];

  const adicionarAoCarrinho = (produto) => {
    setCarrinho([...carrinho, produto]); // Adiciona o produto ao carrinho
  };

  const removerDoCarrinho = (index) => {
    const novoCarrinho = carrinho.filter((_, i) => i !== index); // Remove o produto do carrinho pelo índice
    setCarrinho(novoCarrinho);
  };

  // Função chamada ao clicar em "Finalizar Compra"
  const handleFinalizarCompra = () => {
    console.log("Finalizando compra..."); // Adicionando o log para debugar
    setFormularioVisible(true); // Exibe o formulário de dados do cliente
  };

  return (
    <CarrinhoProvider>
      <div className="App">
        <Header abrirCarrinho={() => setCarrinhoAberto(true)} /> {/* Abre o carrinho */}
        <div className="main-container">
          {/* Exibe os produtos */}
          <Main produtos={produtos} adicionarAoCarrinho={adicionarAoCarrinho} />

          {/* Exibe o carrinho se ele estiver aberto */}
          {carrinhoAberto && (
            <CarrinhoPage
              carrinho={carrinho}
              removerDoCarrinho={removerDoCarrinho}
              finalizarCompra={handleFinalizarCompra} // Passa a função para o CarrinhoPage
            />
          )}

          {/* Exibe o formulário de dados do cliente antes de concluir a compra */}
          {formularioVisible && (
            <div className="formulario-compra">
              <h3>Finalize sua compra</h3>
              <form>
                <input type="text" placeholder="Nome Completo" required />
                <input type="text" placeholder="Endereço" required />
                <input type="email" placeholder="Email" required />
                <select required>
                  <option value="">Escolha a forma de pagamento</option>
                  <option value="pix">Pix</option>
                  <option value="cartao">Cartão</option>
                  <option value="boleto">Boleto</option>
                </select>
                <button type="submit">Concluir Compra</button>
              </form>
            </div>
          )}
        </div>
      </div>
    </CarrinhoProvider>
  );
}

export default App;
