import { useContext } from "react";
import MenuComponent from "../../components/menu";
import { CarrinhoContext } from "../../context/carrinhoContext";
import { Link } from "react-router-dom";

const CarrinhoPage = () => {
    const { carrinho, addCarrinho, delCarrinho, limparCarrinho } = useContext(CarrinhoContext);
    
    const total = carrinho.reduce(
        (acc, item) => acc + item.preco * item.quantidade, 0
      );

    return (
        <>
            <MenuComponent />
            <div className="container">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item active" aria-current="page"><Link to="/"><i className="bi bi-house"></i> Início</Link></li>
                        <li className="breadcrumb-item" aria-current="page">Carrinho de Compras</li>
                    </ol>
                </nav>
                {carrinho.length === 0 ? (
                    <h2>Seu carrinho está vazio.</h2>
                ) : (
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Produto</th>
                                    <th>Preço</th>
                                    <th>Quantidade</th>
                                    <th>Sub-total</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                            {carrinho.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.nome}</td>
                                    <td>{item.preco.toFixed(2)}</td>
                                    <td>{item.quantidade}</td>
                                    <td>{(item.preco * item.quantidade).toFixed(2)}</td>
                                    <td>
                                        <button className="btn btn-success btn-sm" onClick={() => addCarrinho(item)}>
                                            <i className="bi bi-plus"></i>
                                        </button>
                                        <button className="btn btn-danger btn-sm" onClick={() => delCarrinho(item.id)}>
                                            <i className="bi bi-trash3"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th colSpan={3}>Total a Pagar</th>
                                    <th colSpan={2}>R$ {total.toFixed(2)}</th>
                                </tr>
                            </tfoot>
                        </table>
                        )}
            </div>
        </>
    );
}

export default CarrinhoPage;