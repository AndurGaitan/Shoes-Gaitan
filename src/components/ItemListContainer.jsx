import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemList from "./ItemList";

const ItemListContainer = (props) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const productos = [
            {
                "id": 1,
                "nombre": "Zapatillas Adidas SSstar",
                "precio": 23000,
                "imagen": "https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dw1e1cd6b9/products/AD_EG4958/AD_EG4958-1.JPG?sw=400&sh=400"
            },

            {
                "id": 2,
                "nombre": "Zapatillas Fila Genation",
                "precio": 20000,
                "imagen": "https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dw12fe972d/products/FI_1CM01569-019/FI_1CM01569-019-1.JPG?sw=400&sh=400"
            },

            {
                "id": 3,
                "nombre": "Zapatillas Vans Oldskool",
                "precio": 16000,
                "imagen": "https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dw3c758933/products/VA_VN000KW6HR0/VA_VN000KW6HR0-1.JPG?sw=400&sh=400"
            },

            {
                "id": 4,
                "nombre": "Zapatillas Nike Crimpact",
                "precio": 25000,
                "imagen": "https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dw36e6b507/products/NI_DB2477-300/NI_DB2477-300-1.JPG?sw=400&sh=400"
            },

            {
                "id": 5,
                "nombre": "Zapatillas Nike Huarache",
                "precio": 29000,
                "imagen": "https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dw50afdaec/products/NI_DD1068-003/NI_DD1068-003-1.JPG?sw=400&sh=400"
            },

            {
                "id": 6,
                "nombre": "Zapatillas Nike Max Dawn",
                "precio": 29000,
                "imagen": "https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dw5ecbea5c/products/NI_DH4656-001/NI_DH4656-001-1.JPG?sw=400&sh=400"
            },

        ];
         
        const getProductos = new Promise((resolve) => {
            setTimeout(() => {
                resolve(productos);
            }, 2000);
        });

        getProductos.then((respuesta) => {
            setItems(respuesta);
        });
    }, []);


    return (
        <div className="container">
            <ItemList items={items} />

        </div>
    )
}

export default ItemListContainer;