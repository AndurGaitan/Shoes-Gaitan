import React from "react";
import { Link } from "react-router-dom";

const Item = ({imagen, precio, nombre, id}) => {
    return (
            <div className="card" >
                <div className="text-center"><Link to={"/producto/" + id}><img src={imagen} className="card-img-top" alt={nombre}/></Link></div>
                <div className="card-body">
                    <h4 className="card-title text-center"><b>{nombre}</b></h4>
                    <p className="card-text precio fs-5">$ {precio}</p>
                    <div className="text-center">
                    <Link to={"/producto/" + id} className="btn button btnNuevo">VER MAS</Link>
                    </div>
                </div>
            </div>
    )
}

export default Item;