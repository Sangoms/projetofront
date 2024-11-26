import axios from "axios";
import { useState } from "react";
import Alerta from "./components/Alerta";
import Loading from "../../components/loading";

const CadClientePage = () => {
    const [nome, setNome] = useState(null);
    const [email, setEmail] = useState(null);
    const [senha, setSenha] = useState(null);
    const [mensagem, setMensagem] = useState(null);
    const [tipo, setTipo] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    
    const cadastrarCliente = async () => {
        try {
            setIsLoading(true);
            const dataCliente = { nome, email, senha };
            const response = await axios.post(`http://localhost:444/clientes`, dataCliente); // Salva a resposta
            console.log("Resposta do servidor:", response.data); // Exibe a resposta no console para validação
            setMensagem("Cliente cadastrado com sucesso");
            setTipo("success");
        } catch (error) {
            console.error("Erro ao cadastrar cliente:", error); // Mostra o erro no console
            setMensagem("Erro no cadastro do cliente");
            setTipo("danger");
        } finally {
            setIsLoading(false);
        }
    };

    const handleCadCliente = async (event) => {
        event.preventDefault();
        await cadastrarCliente();
    };

    return (
       <div className="container">
        {mensagem !== null && <Alerta mensagem={mensagem} tipo={tipo} />}
        {isLoading && <Loading />}
        <form onSubmit={handleCadCliente}>
            <div className="mb-3">
                <label htmlFor="nome" className="form-label">Nome</label>
                <input type="text" className="form-control" id="nome" onChange={(e) => setNome(e.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">E-mail</label>
                <input type="email" className="form-control" id="email" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="senha" className="form-label">Senha</label>
                <input type="password" className="form-control" id="senha" onChange={(e) => setSenha(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-primary">Cadastrar</button>
        </form>
       </div> 
    );
};

export default CadClientePage;
