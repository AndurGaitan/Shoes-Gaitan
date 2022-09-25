import React from "react";
import { useEffect } from "react";
// import { useContext } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
// import { CartContext } from "../context/cartContext";
import Loanding from "./Loanding";
import { getFirestore, getDoc, doc} from "firebase/firestore"

const ItemDetailContainer = () =>{
    const [items, setItems] = useState({});
    const [loading, setLoanding] = useState(true);
    const {id} = useParams();
    // const valores = useContext(CartContext);

    useEffect(()=>{
        const db = getFirestore();
        const selection = doc(db, "items", id);
        getDoc(selection).then((snapshot) => {
            if (snapshot.exists()){
                setItems({id: snapshot.id, ...snapshot.data()});
            }
            setLoanding(false);
        });

    },[id]);

    return(
        <div className="container">
            {loading ? <Loanding/> : <ItemDetail items={items}/>}
            
        </div>
    )
}

export default ItemDetailContainer;