import axios from 'axios';

// Configura a instância do Axios
const http = axios.create({
  baseURL: 'http://localhost:3001/api', // Substitua pela URL base do seu backend
  timeout: 10000, // Tempo máximo de espera para uma resposta (10 segundos)
  headers: {
    'Content-Type': 'application/json', // Tipo de conteúdo padrão
  },
});

// Interceptor para adicionar o token de autenticação nas requisições
http.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken'); // Obter token do armazenamento local
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Adiciona o token no cabeçalho
    }
    return config;
  },
  (error) => {
    console.error('Erro ao configurar a requisição:', error);
    return Promise.reject(error); // Retorna o erro para ser tratado na chamada
  }
);

// Interceptor para tratar respostas e erros
http.interceptors.response.use(
  (response) => response, // Caso a resposta seja bem-sucedida
  (error) => {
    // Tratamento centralizado de erros
    if (error.response) {
      console.error(`Erro na API: ${error.response.status} - ${error.response.data.message || error.response.statusText}`);
      if (error.response.status === 401) {
        window.location.href = '/login'; // Redirecionar para login
      }
    } else if (error.request) {
      console.error('Erro de rede ou servidor indisponível.');
    } else {
      console.error('Erro desconhecido:', error.message);
    }
    return Promise.reject(error); // Retorna o erro para o componente que fez a requisição
  }
);

export default http;
