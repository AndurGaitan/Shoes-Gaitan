import React from "react";
import ItemCount from "./ItemCount";


const ItemDetail = ({ items }) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 offset-md-2">
                    <img src={items.imagen} alt={items.nombre} className="img-fluid" />
                </div>
                <div className="col-md-4">
                    <h1>{items.nombre}</h1>
                    <p>{items.detalle}</p>
                    <b>${items.precio}</b>
                    <br/>
                    <ItemCount stock={5} initial={1} onAdd={0}/>
                </div>
                 
            </div>
        </div>
    )
}

export default ItemDetail;