import React from "react";

const Success = ({id, name}) => {

    return(
        <div className="container py-5">
            <div className="row">
                <div className="col-md-6 offset-md-3 text-center">
                    <h1>Felicitaciones {name}</h1>
                    <p>La orden se genero con el ID: <b>{id}</b></p>
                </div>
            </div>
        </div>
    )
}

export default Success;