import http from './http';

export const getProdutos = async () => {
  try {
    const response = await http.get('/produtos'); // Endpoint para buscar produtos
    return response.data; // Retorna os dados recebidos
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    throw error; // Propaga o erro para o componente que chamou
  }
};
 