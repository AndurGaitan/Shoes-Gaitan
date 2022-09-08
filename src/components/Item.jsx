import React from "react";

const Item = ({imagen, precio, nombre}) => {
    return (
            <div className="card" >
                <img src={imagen} className="card-img-top" alt={nombre}/>
                <div className="card-body">
                    <h4 className="card-title text-center"><b>{nombre}</b></h4>
                    <p className="card-text precio fs-5">{precio}</p>
                    <button href="#" className="btn button btnNovo">VER MAS</button>
                </div>
            </div>
    )
}

export default Item;