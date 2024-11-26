import { createContext, useState } from "react";

export const CarrinhoContext = createContext();

export const CarrinhoProvider = ({children}) => {
    const [carrinho, setCarrinho] = useState([]);
    
    const addCarrinho = (produto) => {
        setCarrinho((prevCart) => {
            const existingItem = prevCart.find((item) => produto.id === item.id);
            if(existingItem){
                return prevCart.map((item) => item.id === produto.id ? 
                        { ...item, quantidade: item.quantidade + 1 } : item);
            }
            return [...prevCart, { ...produto, quantidade: 1 }];
        });
    }

    const delCarrinho = (id) => {
        setCarrinho((prevCart) => prevCart.map((item) => item.id === id
                    ? { ...item, quantidade: item.quantidade - 1 }
                    : item).filter((item) => item.quantidade > 0));
    }

    const limparCarrinho = () => setCarrinho([]);

    return (
        <CarrinhoContext.Provider value={{ carrinho, addCarrinho, delCarrinho, limparCarrinho }}>
            {children}
        </CarrinhoContext.Provider>
    );
}