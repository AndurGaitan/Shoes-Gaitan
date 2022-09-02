import React from "react";
import logo from "./img/logotipo.png";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return(
        <header className="contenedor">
            <nav className="row">
                
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
                    <CartWidget/>
                </ul>
                

            </nav>
            
        </header>
    )
}

export default NavBar;