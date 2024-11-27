import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UsuarioForm = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [endereco, setEndereco] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Armazene os dados do usuário localmente (ou em um Context)
    const usuarioData = { nome, email, endereco };
    localStorage.setItem('usuario', JSON.stringify(usuarioData));

    // Redirecione para a página de finalização de compra
    navigate('/finalizar-compra');
  };

  return (
    <div className="usuario-form-container">
      <h2>Dados do Usuário</h2>
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
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        <button type="submit">Continuar para Finalizar Compra</button>
      </form>
    </div>
  );
};

export default UsuarioForm;
