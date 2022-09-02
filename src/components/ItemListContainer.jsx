import React from "react";

const ItemListContainer = (props) => {
    return(
        <div>
            <p style={{color: props.color}}>{props.greeting}</p>
        </div>
    )
}

export default ItemListContainer;