import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import Loanding from "./Loanding";
// import { products } from "./Products";
import { getFirestore, collection, getDocs, query, where} from "firebase/firestore"

const ItemListContainer = (props) => {
    const [items, setItems] = useState([]);
    const [loading, setLoanding] = useState(true)
    const {id} = useParams();
    // const {categoria} = useParams();
    // console.log(categoria)
    // const {genero} = useParams();

    useEffect(() => {
        const db = getFirestore();
        // const q = query(
        //     collection(db, "items"),
        //     where("categoria", "==", "mochila"),
        //     where("categoria", "==", "gorras")
        // );
        const itemsCollection = collection(db, "items");
        const queryItems = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection
        // const queryFilter = categoria ? query (itemsCollection, where("categoria", "==", categoria)) : itemsCollection
        getDocs(queryItems).then((snapshot) =>{
            if (snapshot.size === 0) {
                console.log("No hay resultado")
            }
            setItems(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})));
            setLoanding(false)
        });
    }, [id]);


    // useEffect(() => {
    //     let categoria = "";

    //     if (genero === "men") {
    //          categoria = "men"
    //     } else if (genero === "women"){
    //          categoria = "women";
    //     }else {
    //          categoria = "all"
    //     };

    //     const getProductos = new Promise((resolve) => {
    //         setTimeout(() => {
    //             resolve(products);
    //         }, 500);
    //     });

    //     getProductos.then((respuesta) => {
    //         if (categoria === "all"){
    //         setItems(respuesta);
    //         setLoanding(false)
    //     } else {
    //         const array_productos = respuesta.filter(producto => producto.categoria === categoria)
    //         setItems(array_productos)
            
    //     }
    //     });
    // }, [genero]);


    return (
        <div className="container">
            {loading ? <Loanding/> : <ItemList items={items} />}
        </div>
    )
}

export default ItemListContainer;