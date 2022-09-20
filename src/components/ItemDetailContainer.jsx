import React from "react";
import { useEffect } from "react";
// import { useContext } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { products } from "./Products";
// import { CartContext } from "../context/cartContext";
import Loanding from "./Loanding";

const ItemDetailContainer = () =>{
    const [items, setItems] = useState({});
    const [loading, setLoanding] = useState(true);
    const {id} = useParams();
    // const valores = useContext(CartContext);



    useEffect(()=>{
        const getItems = () => 
        new Promise((res, rej) => {
            const product = products.find((prod) => prod.id === id)
                setTimeout(() => {
                res(product);
            }, 500);
        });
        getItems()
        .then ((info)=>{
            setItems(info)
            setLoanding(false)
        })
        .catch((error)=>{
            console.log(error)
        })
    },[id]);

    return(
        <div className="container">
            {loading ? <Loanding/> : <ItemDetail items={items}/>}
            
        </div>
    )
}

export default ItemDetailContainer;