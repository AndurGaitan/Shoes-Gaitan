import React from "react";

const Success = ({id}) => {
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