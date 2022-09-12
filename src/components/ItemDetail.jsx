import React from "react";
import ItemCount from "./ItemCount";


const ItemDetail = ({ items }) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 offset-md-2">
                    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active" data-bs-interval="10000">
                                <img src={items.imagen} class="d-block w-100" alt={items.nombre}/>
                            </div>
                            <div class="carousel-item" data-bs-interval="2000">
                                <img src={items.imagen1} class="d-block w-100" alt={items.nombre}/>
                            </div>
                            <div class="carousel-item">
                                <img src={items.imagen2} class="d-block w-100" alt={items.nombre}/>
                            </div>
                            <div class="carousel-item">
                                <img src={items.imagen3} class="d-block w-100" alt={items.nombre}/>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div className="col-md-4">
                    <h1>{items.nombre}</h1>
                    <p>{items.detalle}</p>
                    <b>{items.precio}</b>
                    <br />
                    <ItemCount stock={5} initial={1} onAdd={0} />
                </div>

            </div>
        </div>
    )
}

export default ItemDetail;