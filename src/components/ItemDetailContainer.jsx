import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { products } from "./Products";

const ItemDetailContainer = (props) =>{
    const [items, setItems] = useState({});
    const {id} = useParams();

    useEffect(()=>{
        const getItems = () => 
        new Promise((res, rej) => {
            const product = products.find((prod) => prod.id === 5)
                setTimeout(() => {
                res(product);
            }, 2000);
        });
        getItems()
        .then ((info)=>{
            setItems(info)
        })
        .catch((error)=>{
            console.log(error)
        })



    },[id]);

    return(
        <div className="container">
            <ItemDetail items={items}/>
        </div>
    )
}

export default ItemDetailContainer;