import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const { totalUnits } = useContext(CartContext)
    const units = totalUnits()
    return (
        <Link to="/cart">
            <div style={{ display: 'flex', alignItems: 'center', color: 'black' }}>
                <i class="bi bi-cart"></i>
                <span>{units}</span>
            </div>
        </Link>
    )
}

export default CartWidget;