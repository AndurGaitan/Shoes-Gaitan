import React from "react";
import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState(initial);

    const sumar = () => {
        count < stock && setCount(count + 1);
    };

    const restar = () => {
        count > initial && setCount(count - 1);
    };

    return (
        <div className="mt-2">
            <div className="input-group">
                <button className="btn btnNovo" onClick={restar}>
                    -
                </button>
                <div className="mx-auto">
                    {count}
                </div>
                <button className="btn btnNovo" onClick={sumar}>
                    +
                </button>
            </div>
            <div className="d-grid gap-2 m-3">
                <button className="btn btnNovo" onClick={() => onAdd(count)}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    );
};

export default ItemCount;