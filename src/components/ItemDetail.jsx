import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import ItemCount from "./ItemCount";
import {Link} from "react-router-dom";


const ItemDetail = ({items}) => {
    const [goToCart, setGoToCart] = useState(false);
    const {addToCart} = useContext(CartContext);

    const onAdd = (cantidad) => {
        setGoToCart(true);
        addToCart(items, cantidad)
    
    };

   
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-5 offset-md-2 mt-4">
                    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="10000">
                                <img src={items.imagen} className="d-block w-100" alt={items.nombre}/>
                            </div>
                            <div className="carousel-item" data-bs-interval="2000">
                                <img src={items.imagen1} className="d-block w-100" alt={items.nombre}/>
                            </div>
                            <div className="carousel-item">
                                <img src={items.imagen2} className="d-block w-100" alt={items.nombre}/>
                            </div>
                            <div className="carousel-item">
                                <img src={items.imagen3} className="d-block w-100" alt={items.nombre}/>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div className="col-md-4 mt-4">
                    <h1 className="text-center">{items.nombre}</h1>
                    <p>{items.description}</p>
                    <b className="price"> $ {items.precio}</b>
                    <br />
                    {
                    goToCart
                    ? <div className="btn-group mb-5">
                        <button className="btn btnNovo"><Link className="text-Fin" to='/cart'>Finalizar Compra</Link></button>
                        <button className="btn btn-dark"><Link className="text-Con" to='/'>Seguir comprando</Link></button>
                      </div>
                    : <ItemCount stock={5} initial={1} onAdd={onAdd} />
                    }   

                </div>

            </div>
        </div>
    )
}

export default ItemDetail;