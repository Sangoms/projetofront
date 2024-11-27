import React, { useState } from 'react';
import axios from 'axios'; // Para realizar requisições HTTP

function FinalizarCompra({ carrinho }) {
  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');
  const [email, setEmail] = useState('');
  const [pagamento, setPagamento] = useState('');
  const [cep, setCep] = useState('');  // Estado para armazenar o CEP
  const [enderecoCompleto, setEnderecoCompleto] = useState(''); // Estado para armazenar os dados completos de endereço

  const buscarEndereco = async (cep) => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      if (response.data && !response.data.erro) {
        setEnderecoCompleto(response.data); // Preenche com os dados do endereço
        setEndereco(response.data.logradouro); // Preenche o campo de endereço com a rua
      } else {
        alert('CEP não encontrado');
      }
    } catch (error) {
      console.error('Erro ao buscar o CEP', error);
      alert('Erro ao buscar o CEP');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simula a finalização da compra
    console.log('Compra Finalizada:', { nome, endereco, email, pagamento, carrinho });
    alert('Compra realizada com sucesso!');
  };

  return (
    <div>
      <h2>Finalizar Compra</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome Completo:</label>
          <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} required />
        </div>
        <div>
          <label>CEP:</label>
          <input 
            type="text" 
            value={cep} 
            onChange={(e) => setCep(e.target.value)} 
            maxLength={8} 
            placeholder="Ex: 12345678"
            required
            onBlur={() => cep.length === 8 && buscarEndereco(cep)}  // Chama a função quando o campo perde o foco
          />
        </div>
        <div>
          <label>Endereço:</label>
          <input 
            type="text" 
            value={endereco} 
            onChange={(e) => setEndereco(e.target.value)} 
            required 
            disabled
          />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Forma de Pagamento:</label>
          <select value={pagamento} onChange={(e) => setPagamento(e.target.value)} required>
            <option value="">Selecione</option>
            <option value="pix">Pix</option>
            <option value="cartao">Cartão</option>
            <option value="boleto">Boleto</option>
          </select>
        </div>
        <button type="submit">Concluir Compra</button>
      </form>
    </div>
  );
}

export default FinalizarCompra;
