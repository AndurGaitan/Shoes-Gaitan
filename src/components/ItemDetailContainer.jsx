import React from "react";
import { useEffect, useState, useParams } from "react";
import ItemDetail from "./ItemDetail";
import Loader from "./Loader";
import { getFirestore, getDoc, doc} from "firebase/firestore"

const ItemDetailContainer = () =>{
    const [items, setItems] = useState({});
    const [loading, setLoading] = useState(true);
    const {id} = useParams();

    useEffect(()=>{
        const db = getFirestore();
        const selection = doc(db, "items", id);
        getDoc(selection).then((snapshot) => {
            if (snapshot.exists()){
                setItems({id: snapshot.id, ...snapshot.data()});
            }
            setLoading(false);
        });

    },[id]);

    return(
        <div className="container">
            {loading ? <Loader/> : <ItemDetail items={items}/>}
            
        </div>
    )
}

export default ItemDetailContainer;