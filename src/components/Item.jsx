import React from "react";

const Item = (props) => {
    return(
        <div>
            <p style={{color: props.color}}>{props.greeting}</p>
        </div>
    )
}

export default Item;