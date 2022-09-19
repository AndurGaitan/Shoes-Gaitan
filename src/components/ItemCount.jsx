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
        <div>
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
//                 <div>
//                     <div className="input-group">
//                         <input type="button" className="btn btn-secondary" value="-" onClick={() => { decrementarCantidad(cantidad - 1) }} />
//                         <input type="text" className="form-control" value={cantidad} onChange={() => {}}/>
//                         <input type="button" className="btn btn-secondary" value="+" onClick={() => { incrementarCantidad(cantidad + 1) }} />
//                     </div>
//                     <div className="d-grid gap-2 py-3">
//                         <input type="button" className="btn btnNovo" value="Agregar" onClick={() => {agregarProductos()}} />
//                     </div>
//                     <p>Productos seleccionados: {itemAdd}</p>
//                 </div>


// const ItemCount = ({ stock, initial, onAdd }) => {
//     const [cantidad, setCantidad] = useState(initial);
//     const [itemStock, setItemStock] = useState(stock);
//     const [itemAdd, setItemAdd] = useState(onAdd);

//     const decrementarCantidad = (valor) => {
//         if (valor > 0) {
//             setCantidad(valor);
//         }
//     }

//     const incrementarCantidad = (valor) => {
//         if (valor <= itemStock)
//             setCantidad(valor);
//     }

//     const agregarProductos = () => {
//         if (cantidad <= itemStock) {
//             setItemStock(itemStock - cantidad);
//             setItemAdd(itemAdd + cantidad);
//             console.log(itemStock)
//         }
//     }

//     return (
//                 <div>
//                     <div className="input-group">
//                         <input type="button" className="btn btn-secondary" value="-" onClick={() => { decrementarCantidad(cantidad - 1) }} />
//                         <input type="text" className="form-control" value={cantidad} onChange={() => {}}/>
//                         <input type="button" className="btn btn-secondary" value="+" onClick={() => { incrementarCantidad(cantidad + 1) }} />
//                     </div>
//                     <div className="d-grid gap-2 py-3">
//                         <input type="button" className="btn btnNovo" value="Agregar" onClick={() => {agregarProductos()}} />
//                     </div>
//                     <p>Productos seleccionados: {itemAdd}</p>
//                 </div>

//     )
// }

export default ItemCount;