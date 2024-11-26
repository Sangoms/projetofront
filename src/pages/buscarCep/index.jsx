import axios from "axios";
import { useState } from "react";
import Alerta from "./components/Alerta";
import Loading from "../../components/loading";
import DetalhesLogradouro from "../../components/detalhesLogradouro";

const CadClientePage = () => {
    const [nome, setNome] = useState(null);
    const [email, setEmail] = useState(null);
    const [senha, setSenha] = useState(null);
    const [cep, setCep] = useState(null);
    const [logradouro, setLogradouro] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [mensagem, setMensagem] = useState(null);
    const [tipo, setTipo] = useState(null);

    const cadastrarCliente = async () => {
        try {
            setIsLoading(true);
            const dataCliente = {
                nome,
                email,
                senha,
                endereco: logradouro?.logradouro || null,
                bairro: logradouro?.bairro || null,
                cidade: logradouro?.localidade || null,
                estado: logradouro?.uf || null,
            };
            const response = await axios.post(`http://localhost:444/clientes`, dataCliente);
            console.log(response.data);
            setMensagem("Cliente cadastrado com sucesso");
            setTipo("success");
            setIsLoading(false);
        } catch (error) {
            setMensagem("Erro no cadastro do cliente");
            setTipo("danger");
            setIsLoading(false);
        }
    };

    const buscaLogradouro = async () => {
        try {
            setIsLoading(true);
            const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
            setLogradouro(response.data);
            setTipo("success");
            setMensagem("Endereço encontrado com sucesso");
            setIsLoading(false);
        } catch (error) {
            setTipo("danger");
            setMensagem("Erro ao buscar o endereço");
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
                <div className="mb-3">
                    <label htmlFor="cep" className="form-label">CEP</label>
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control"
                            id="cep"
                            placeholder="Digite um CEP válido"
                            onChange={(e) => setCep(e.target.value)}
                        />
                        <button className="btn btn-success" type="button" onClick={buscaLogradouro}>
                            Buscar
                        </button>
                    </div>
                </div>
                {logradouro && <DetalhesLogradouro logradouro={logradouro} />}
                <button type="submit" className="btn btn-primary">Cadastrar</button>
            </form>
        </div>
    );
};

export default CadClientePage;
