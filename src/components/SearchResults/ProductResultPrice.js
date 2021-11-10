import React from 'react'

export function ProductResultPrice(props){
    return(
        <>
        <h2 className="font-size-20px mar-top-5px">{props.price === "" ? "Cargando precio..." : props.price}</h2>
        </>
    )
}