import React from "react";

const Products = () => {
    return (
        <div className="containerCard">
            <div className="card" >
                <img src="https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dw1e1cd6b9/products/AD_EG4958/AD_EG4958-1.JPG?sw=400&sh=400" class="card-img-top" alt="zapatilla" />
                <div class="card-body">
                    <h4 class="card-title">Zapatillas Adidas SSstar</h4>
                    <p class="card-text precio fs-5">$23000</p>
                    <button href="#" class="btn button btnNovo">Agregar al carrito</button>
                </div>
            </div>
            <div className="card" >
                <img src="https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dw3c758933/products/VA_VN000KW6HR0/VA_VN000KW6HR0-1.JPG?sw=400&sh=400" class="card-img-top" alt="zapatilla" />
                <div class="card-body">
                    <h4 class="card-title">Zapatillas Vans Oldskool</h4>
                    <p class="card-text precio fs-5">$23000</p>
                    <button href="#" class="btn button btnNovo">Agregar al carrito</button>
                </div>
            </div>
            <div className="card" >
                <img src="https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dw36e6b507/products/NI_DB2477-300/NI_DB2477-300-1.JPG?sw=400&sh=400" class="card-img-top" alt="zapatilla" />
                <div class="card-body">
                    <h4 class="card-title">Zapatillas Nike Crimpact</h4>
                    <p class="card-text precio fs-5">$25000</p>
                    <button href="#" class="btn button btnNovo">Agregar al carrito</button>
                </div>
            </div>
            <div className="card" >
                <img src="https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dw50afdaec/products/NI_DD1068-003/NI_DD1068-003-1.JPG?sw=400&sh=400" class="card-img-top" alt="zapatilla" />
                <div class="card-body">
                    <h4 class="card-title">Zapatillas Nike Huarache</h4>
                    <p class="card-text precio fs-5">$40000</p>
                    <button href="#" class="btn button btnNovo">Agregar al carrito</button>
                </div>
            </div>
            
        </div>
    )
}

export default Products;