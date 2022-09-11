import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemDetail from "./ItemDetail";
import { products } from "./Products";

const ItemDetailContainer = (props) =>{
    const [items, setItems] = useState({});

    useEffect(()=>{
        const getItems = () => 
        new Promise((res, rej) => {
            const product = products.find((prod) => prod.id === 1)

            setTimeout(() => {
                res(product);
            }, 2000);
        });
        getItems()
        .then ((info)=>{
            setItems(info)
            console.log(info)
        })
        .catch((error)=>{
            console.log(error)
        })



    },[]);

    return(
        <div className="container">
            <ItemDetail items={items}/>
        </div>
    )
}

export default ItemDetailContainer;