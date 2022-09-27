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

    useEffect(() => {
        const db = getFirestore();
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

    return (
        <div className="container">
            {loading ? <Loanding/> : <ItemList items={items} />}
        </div>
    )
}

export default ItemListContainer;