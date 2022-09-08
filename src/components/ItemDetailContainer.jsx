import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = (props) =>{
    const [items, setItems] = useState([]);

    useEffect(()=>{
        const producto = 
            {
                "id": 4,
                "nombre": "Zapatillas Nike Crimpact",
                "precio": 25000,
                "imagen": "https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dw36e6b507/products/NI_DB2477-300/NI_DB2477-300-1.JPG?sw=400&sh=400",
                "detalle": "Nike Crater Impact forma parte de nuestro viaje de sustentabilidad para transformar los desechos en un calzado que se siente un poco más ligero. Confeccionado con al menos un 25% de material reciclado por peso, aporta opciones de diseño únicas que reducen los desechos en comparación con los métodos tradicionales, como Swoosh bordado, revestimientos eficientes y una entresuela de espuma Crater, por supuesto."
            };
        
        const getItems = new Promise((resolve) => {
            setTimeout(() => {
                resolve(producto);
            }, 2000);
        });

        getItems.then((respuesta)=>{
            setItems(respuesta);
        });


    },[]);

    return(
        <div className="container">
            <ItemDetail items={items}/>

        </div>
    )
}

export default ItemDetailContainer;