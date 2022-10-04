import React from "react";
// import { useEffect, useState } from "react";
// import { getFirestore, getDoc, doc} from "firebase/firestore"

const Success = ({id}) => {
    // const [voucher, setVoucher] = useState({});
    // const [loading, setLoading] = useState(true);

    // useEffect(()=>{
    //     const db = getFirestore();
    //     const selection = doc(db, "orders", id);
    //     getDoc(selection).then((snapshot) => {
    //         if (snapshot.exists()){
    //             setVoucher(snapshot.data())
    //             // setItems({id: snapshot.id, ...snapshot.data()});
    //         }
    //     });

    // },[]);
    return(
        <div className="container py-5">
            <div className="row">
                <div className="col-md-6 offset-md-3 text-center">
                    <h1>Felicitaciones</h1>
                    <p>La orden se genero con el ID: <b>{id}</b></p>
                </div>
            </div>
        </div>
    )
}

export default Success;