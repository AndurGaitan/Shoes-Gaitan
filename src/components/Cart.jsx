import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { Link } from "react-router-dom";


const Cart = () => {
    const { cart, deleteOne, clearCart, totalPrice, totalUnits } = useContext(CartContext)
    const total = totalPrice()
    const totalUni = totalUnits()
    return (
        <div className="container mb-5">
            <div className="row">
                {
                    totalUni === 0
                    ? <div>
                        <h1 className="text-center">El carrito esta vacio</h1>
                        <button className="btn btnNovo"><Link to='/'>IR A COMPRAR</Link></button>
                      </div>
                    :
                    <div className="col-lg-12"> 
                    <h2 className="mt-5">Mi carrito</h2>
                    <div className="col-12">
                    {cart.map((producto) => (
                        <div key={producto.id}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="row">
                                            <div className="item-image col-lg-3 d-none d-md-block">
                                                <img src={producto.imagen} className="img-fluid" alt={producto.nombre} />
                                            </div>
                                            <div className="col-lg-9">
                                                <div className="line-item-header">
                                                    <div className="line-item-name mb-2">
                                                        {producto.nombre}
                                                    </div>
                                                    <div className="remove-line-item">
                                                        <button className="delete btn btn-danger mb-5" onClick={() => deleteOne(producto.id)}>
                                                            X
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-8 col-md-12">
                                                        <div className="row justify-content-between right-container">
                                                            <div className="item-attributes d-flex flex-column">
                                                                <p>Talle:</p>
                                                                <p>Id:</p>
                                                            </div>
                                                            <div className="col-lg-5 product-card-footer">
                                                                <div className="row">
                                                                    <div className="col-4 col-lg-3 line-item-quantity">
                                                                        <span>Precio</span>
                                                                        <div>${producto.precio}</div>
                                                                    </div>
                                                                    <div className="col-8 line-item-total-price">
                                                                        <span>Cantidad</span>
                                                                        <div>{producto.cantidad}</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    ))}
                    </div>
                    <button className="delete btn btn-danger mb-8" onClick={clearCart}>Delete all</button>
                    <h2 className="mt-3">Total: $ {total}</h2>
                </div>

                }

            </div>
        </div>
    )

}

export default Cart;
