import React from "react";
import logo from "./img/logotipo.png";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
    return(
        <header className="contenedor">
            <nav className="row">
                
                <ul className="nav justify-content-center">
                    <li className="nav-item ">
                    <Link className="nav-link active" aria-current="page" to={"/"}><img src={logo} alt="logoShoes" width="40" /></Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link letraMenu" to={"/categoria/men"}>Hombre</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link letraMenu" to={"/categoria/women"}>Mujer</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link letraMenu" to={"/"}>Brands</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link letraMenu" to={"/"}>Ofertas</Link>
                    </li>
                    <CartWidget/>
                </ul>
                

            </nav>
            
        </header>
    )
}

export default NavBar;