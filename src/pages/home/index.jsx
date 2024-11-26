import React from "react";
import SaudacaoComponent from "../../../assents/components/saudacaoComponent";
import DetalhesLogradouro from "../../../assents/components/detalheLogradouro";
import Alerta from "../../../assents/components/alerta";
import Loading from "../../../assents/components/loading";
import MenuComponent from "../../../assents/components/menu";

const HomeComponents = () => {
  return (
    <div>
      <MenuComponent />
      <SaudacaoComponent nome="Visitante" />
      <div className="conteudo-principal">
        <h2>Bem-vindo à página inicial!</h2>
        <DetalhesLogradouro logradouro={{ logradouro: "Rua das Flores", bairro: "Centro", cidade: "São Paulo", estado: "SP" }} />
        <Alerta tipo="success" mensagem="Página carregada com sucesso!" />
        <Loading />
      </div>
    </div>
  );
};

export default HomeComponents;
