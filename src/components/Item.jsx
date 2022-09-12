import React from "react";
import { Link } from "react-router-dom";

const Item = ({imagen, precio, nombre, id}) => {
    return (
            <div className="card" >
                <Link to={/producto/ + id}><img src={imagen} className="card-img-top" alt={nombre}/></Link>
                <div className="card-body">
                    <h4 className="card-title text-center"><b>{nombre}</b></h4>
                    <p className="card-text precio fs-5">{precio}</p>
                    <Link to={/producto/ + id} className="btn button btnNovo">VER MAS</Link>
                </div>
            </div>
    )
}

export default Item;