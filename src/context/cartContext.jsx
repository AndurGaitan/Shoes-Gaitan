import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

const CartProvider = (props) => {
    const [cart, setCart] = useState([]);

    console.log("carrito:", cart);
    const addToCart = (items, cantidad) => {
        const producto = { ...items, cantidad };
        if (isInCart(producto.id)) {
            addQuantity(producto);
        } else {
            setCart([...cart, producto]);
        }
    }

    const addQuantity = (producto) => {
        const cartUpdated = cart.map((productInCart) => {
            if (producto.id === productInCart.id) {
                const productUpdated = {
                    ...productInCart,
                    cantidad: productInCart.cantidad + producto.cantidad
                }
                return productUpdated

            } else {
                return productInCart;
            }

        })
        setCart(cartUpdated);
    }

    const clearCart = () => setCart([])

    const deleteOne = (id) => {
        const productsFilter = cart.filter((prod) => prod.id !== id);
        setCart(productsFilter);
    };


    const totalUnits = () => {
        let count = 0
        const copyCart = [...cart]
        copyCart.forEach((producto) => {
            count = count + producto.cantidad;
        });
        return count;
    };

    const totalPrice = () => {
        let count = 0
        const copyCart = [...cart]
        copyCart.forEach((producto) => {
            count = count + producto.cantidad * producto.precio;
        });
        return count;
    };


    const isInCart = (id) => cart.some(prod => prod.id === id);

    return (
        <CartContext.Provider value={{ cart, clearCart, isInCart, addToCart, totalUnits, deleteOne, totalPrice }}>{props.children}</CartContext.Provider>
    )
};

export default CartProvider;    