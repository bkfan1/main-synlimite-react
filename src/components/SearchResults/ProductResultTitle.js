import React from 'react'

export function ProductResultTitle(props){
    return(
        <>
        <a href="#"><h1 className="font-size-22px font-weight-normal">{props.title === "" ? "Cargando título..." : props.title}</h1></a>
        </>
    )
}