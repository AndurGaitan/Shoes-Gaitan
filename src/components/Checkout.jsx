import React from "react";
import { useState, useContext } from "react";
import { CartContext } from "../context/cartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { Link } from "react-router-dom";
import Success from "./Success";

const Checkout = () => {
    const { cart, totalPrice, totalUnits, clearCart } = useContext(CartContext);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [orderId, setOrderId] = useState("");
    const [orderName, setOrderName] = useState("");

    const sendOrder = () => {
        const buyer = { name: name, email: email, phone: phone };
        const items = [];
        cart.forEach((item) => {
            items.push({ id: item.id, name: item.nombre, price: item.precio, quantity: item.cantidad });
        })
        const order = { buyer: buyer, items: items, total: totalPrice() }
        setOrderName(order.buyer.name)
        console.log(order.buyer.name);
        const db = getFirestore();
        const orderCollection = collection(db, "orders");
        addDoc(orderCollection, order).then((data) => {
            setOrderId(data.id) 
            clearCart()
        });
        
    }
    return (
        <div className="container py-5">
            {totalUnits() > 0 ?
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <div className="mb-3">
                            <h1 className="text-center">Formulario de contacto</h1>
                        </div>
                        <div className="mb-3">
                            <label for="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" onInput={(e) => setName(e.target.value)} />

                        </div>
                        <div className="mb-3">
                            <label for="email" className="form-label">Email</label>
                            <input type="text" className="form-control" id="email" onInput={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label for="phone" className="form-label">Phone</label>
                            <input type="text" className="form-control" id="phone" onInput={(e) => setPhone(e.target.value)} />
                        </div>
                        <button type="button" className="btn btnNovo" onClick={() => sendOrder()}>Generar orden</button>
                    </div>
                </div>
                : orderId !== "" ? <Success id={orderId} name={orderName}/>
                : <div>
                    <h1 className="text-center">El carrito esta vacio</h1>
                    <button className="btn btnNovo"><Link className="text-Fin" to='/'>IR A COMPRAR</Link></button>
                  </div>
                }
        </div>

    )

}
export default Checkout;