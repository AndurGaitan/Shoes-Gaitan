import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const { totalUnits } = useContext(CartContext)
    const units = totalUnits()
    return (
        <Link to="/cart">
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <span className="material-icons">shopping_cart</span>
                <span>{units}</span>
            </div>
        </Link>
    )
}

export default CartWidget;