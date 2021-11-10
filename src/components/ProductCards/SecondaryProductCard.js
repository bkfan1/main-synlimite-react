import React from 'react'
import ShoeImg from "../../static/img/shoe.png"

export function SecondaryProductCard(props){

    return(
        <>
        <figure className="secondary-product dp-flex flex-dir-col align-items-center justify-cnt-center">
            <a><img src={props.productImage === "" ? ShoeImg : props.productImage} alt="" className="secondary-product-img" /></a>
            <a href="#"><h3 className="width-100per">{props.productTitle === "" ? "Cargando título..." : props.productTitle}</h3></a>
            <h4 className="mar-bottom-5px font-weight-normal font-size-14px color-lightgray">{props.productDescription === "" ? "Cargando descripción..." : props.productDescription}</h4>
            <h3>$9.999</h3>
        </figure>
        </>
    )
    
}