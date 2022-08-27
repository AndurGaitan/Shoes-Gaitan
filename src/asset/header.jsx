import React from "react";
const Header = () => {
    return(
        <div className="contenedor">
            <div className="row">
                
                <ul class="nav justify-content-center">
                    <li class="nav-item ">
                    <a class="nav-link active" aria-current="page" href="#/">Shoes</a>
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
                    <li class="nav-item">
                    <i class="bi bi-cart carrito"></i>
                    </li>
                </ul>

            </div>
            
        </div>
    )
}

export default Header;