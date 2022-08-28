import React from "react";
import logo from "./img/logotipo.png";
import Cart from "./Cart";

const Header = () => {
    return(
        <div className="contenedor">
            <div className="row">
                
                <ul class="nav justify-content-center">
                    <li class="nav-item ">
                    <a class="nav-link active" aria-current="page" href="#/"><img src={logo} alt="logoShoes" width="40" /></a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link letraMenu" href="#/">Hombre</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link letraMenu" href="#/">Mujer</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link letraMenu" href="#/">Brands</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link letraMenu" href="#/">Ofertas</a>
                    </li>
                    <Cart/>
                </ul>
                

            </div>
            
        </div>
    )
}

export default Header;