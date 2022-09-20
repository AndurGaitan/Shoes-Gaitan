import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import Loanding from "./Loanding";
import { products } from "./Products";

const ItemListContainer = (props) => {
    const [items, setItems] = useState([]);
    const [loading, setLoanding] = useState(true)
    const {genero} = useParams();

    useEffect(() => {
        let categoria = "";

        if (genero === "men") {
             categoria = "men"
        } else if (genero === "women"){
             categoria = "women";
        }else {
             categoria = "all"
        };

        const getProductos = new Promise((resolve) => {
            setTimeout(() => {
                resolve(products);
            }, 500);
        });

        getProductos.then((respuesta) => {
            if (categoria === "all"){
            setItems(respuesta);
            setLoanding(false)
        } else {
            const array_productos = respuesta.filter(producto => producto.categoria === categoria)
            setItems(array_productos)
            
        }
        });
    }, [genero]);


    return (
        <div className="container">
            {loading ? <Loanding/> : <ItemList items={items} />}
        </div>
    )
}

export default ItemListContainer;