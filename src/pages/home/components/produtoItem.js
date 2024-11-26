const ProdutoItem = ({produto, handleClick}) => {
    const imagem = require(`../../../assets/imgs/${produto.imagem}`);
    return (
        <div className="card" style={{width: "18rem"}}>
            <img src={imagem} className="img-fluid" width={200} alt="..." />
            <div className="card-body">
                <h5 className="card-title">{produto.nome}</h5>
                <p className="card-text">R$ {produto.preco.toFixed(2)}</p>
                <button className="btn btn-primary" onClick={handleClick}>Adicionar ao Carrinho</button>
            </div>
        </div>
    );
}

export default ProdutoItem;