import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

const CartProvider = (props) => {
    //Estados
    const [cart, setCart] = useState([]);

    //Funciones que modifique los estados 
    const addToCart = (items, cantidad) => {

        const producto = {...items, cantidad};
        setCart([...cart, producto]);
        console.log(cart)

    }
    

    return(
        <CartContext.Provider value={{cart, addToCart}}>{props.children}</CartContext.Provider>
    )
};

export default CartProvider;    