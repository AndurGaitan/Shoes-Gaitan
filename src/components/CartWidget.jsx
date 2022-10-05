import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const { totalUnits } = useContext(CartContext)
    const units = totalUnits()
    return (
        <div className="mt-2">
        <Link to="/cart">
            <div style={{ display: 'flex', color: 'black',  }}>
                <i class="bi bi-cart"></i>
                <span>{units}</span>
            </div>
        </Link>
        </div>
    )
}

export default CartWidget;