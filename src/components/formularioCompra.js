import React, { useState } from 'react';

const FormularioCompra = () => {
  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');
  const [email, setEmail] = useState('');
  const [formaPagamento, setFormaPagamento] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode processar a compra ou enviar os dados para a API
    console.log({
      nome,
      endereco,
      email,
      formaPagamento,
    });
  };

  return (
    <div className="formulario-compra">
      <h3>Finalize sua compra</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome Completo:</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Endereço:</label>
          <input
            type="text"
            value={endereco}
            onChange={(e) => setEndereco(e.target.value)}
            required
          />
        </div>
        <div>
          <label>E-mail:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Forma de Pagamento:</label>
          <select
            value={formaPagamento}
            onChange={(e) => setFormaPagamento(e.target.value)}
            required
          >
            <option value="">Escolha uma forma de pagamento</option>
            <option value="pix">Pix</option>
            <option value="cartao">Cartão</option>
            <option value="boleto">Boleto</option>
          </select>
        </div>
        <button type="submit">Concluir Compra</button>
      </form>
    </div>
  );
};

export default FormularioCompra;
