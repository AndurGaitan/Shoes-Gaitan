import React from "react";
import logo from "./img/logotipo.png";
import Cart from "./Cart";

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
                    <Cart/>
                </ul>
                

            </nav>
            
        </header>
    )
}

export default NavBar;