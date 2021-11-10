import React from 'react'
import muebleImg from "../../static/img/mueble.jpg"

export function ProductResultImage(props){
    return(
        <>
        <img src={props.img === "" ? muebleImg : props.img} className="product-result-img" alt=""></img>
        </>
    )
}