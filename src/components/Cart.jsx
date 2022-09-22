import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";
// import { Link } from "react-router-dom";


const Cart = () => {
    const { cart, deleteOne, clearCart } = useContext(CartContext)
    return (
        <div className="container">
            <div className="row">
            <h2 className="text-center mt-5 mb-5">Carrito de compras</h2>
            {cart.map((producto) => (
                <div key={producto.id}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 offset-md-2">
                                <img src={producto.imagen} className="img-fluid" alt={producto.nombre} />
                            </div>
                            <div className="col-md-4">
                                <h4>{producto.nombre}</h4>
                                <h4>{producto.cantidad} productos</h4>
                                <h4>${producto.precio}</h4>
                                <br />
                                <button className="delete btn btn-danger mb-5" onClick={() => deleteOne(producto.id)}>
                                    X
                                </button>
                                {/* <button className="btn btnNovo"><Link>Finalizar Compra</Link></button> */}
                            </div>
                        </div>
                    </div>
                </div>

            ))}
             <button className="delete btn btn-danger mb-8" onClick={clearCart}>Delete all</button>  
             </div>
        </div>
    )

}

export default Cart;
