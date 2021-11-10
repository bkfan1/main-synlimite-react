import React from 'react'
import { ProductPostActionsForm } from '../ProductPost/ProductPostActionsForm'
import { RateList } from '../Common/RateList'


export function ProductPostData(props){
    return(
    <>
    <div className="productInfoContainer pad-left-20px">

        <ul className="mar-top-10px mar-bottom-10px">
            <li><span className="font-size-22px font-weight-bold">{props.productTitle === "" ? "Cargando título..." : props.productTitle}</span></li>
            <li><RateList /></li>
            <li><a href="#" className="mar-top-5px font-size-14px color-lightgray">{props.productCantReviews === 0 ? "0 reseñas" : props.productCantReviews}</a></li>
            <li><a href="#" className="font-size-14px color-lightgray">{props.productCantOrders === 0 ? "0 pedidos" : props.productCantOrders}</a></li>
            <li><span className="font-size-22px font-weight-bold">{props.productPrice === 0 ? "Cargando precio..." : props.productPrice}</span></li>
            <li className="mar-top-10px"><a className="color-skyblue cursor-pointer" href={props.productSeller === "" ? "#" : props.productSeller}>Información del vendedor</a></li>
            <li><a className="color-skyblue cursor-pointer" href={props.productPaymentMethods === "" ? "#" : props.PaymentMethods}>Ver métodos de pago</a></li>
        </ul>

        <ul className="productPostUbicationData mar-top-10px">
            <li><span className="font-size-18px font-weight-bold"><i className="bi bi-geo-alt-fill"></i> Ubicación:</span></li>
            <li><span>{props.productUbication === "" ? "Cargando ubicación del producto..." : props.productUbication}</span></li>
        </ul>

        <ul className="productPostWeight mar-bottom-20px">
            <li><span className="font-size-18px font-weight-bold">Peso:</span></li>
            <li><span>{props.productWeight === 0 ? "Cargando peso del producto..." : props.productWeight}</span></li>
        </ul>

        <ul>
            <li><span className="font-size-18px font-weight-bold">Cantidad:</span></li>
            <li><span>{props.productCant === 0 ? "000 unidades disponibles" : props.productCant}</span></li>
        </ul>

        <ProductPostActionsForm />

    </div>
    </>

    )
}