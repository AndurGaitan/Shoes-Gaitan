import React from "react";
import { useState } from "react";

const Footer = () => {
    let [horarios, setHorarios] = useState ("de 7 a 19")
    return(
        <div className="container fondoNegro">
            <div className="row">
                <div className="col-12    letraBlanca">
                    <h4>Centro de Atención al Cliente</h4>
                    <p>Lunes a Viernes de {horarios} / Sábado de 9 a 17 hs</p>
                    <p>0810-000-0000</p>
                </div>
                <button onClick={()=> {setHorarios("de 19 a 21")}}>Consultar horarios</button>
            </div>
        </div>
    )
}

export default Footer;