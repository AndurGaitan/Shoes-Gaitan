import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import Loader from "./Loader";
import { getFirestore, collection, getDocs, query, where} from "firebase/firestore"


const ItemListContainer = (props) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true)
    const {id} = useParams();

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        const queryItems = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection
        getDocs(queryItems).then((snapshot) =>{
            if (snapshot.size === 0) {
                console.log("No hay resultado")
            }
            setItems(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})));
            setLoading(false)
        });
    }, [id]);

    return (
        <div className="container">
            {loading ? <Loader/> : <ItemList items={items} />}
        </div>
    )
}

export default ItemListContainer;