import React from 'react'
import ImagenMueble from "../../static/img/mueble.jpg"


export function ProductCard(){
    return(
        <>
        <a href="">
            <figure className="recommended-product-card dp-flex flex-dir-col pad-10px box-shadow1">
                <div className="img-container dp-flex width-100per justify-cnt-center">
                    <img src={ImagenMueble} alt="Imagen del producto" className="recommended-product-img" />
                </div>
                
                <div className="description-cont width-100per">
                    <h1 className="width-100per font-size-18px text-align-center">Couch Set 3x4</h1>
                    <p className="font-size-16px pad-top-5px text-align-center color-dedeegray">Lorem ipsum dolor, sit amet consectetur adipisicing</p>
                </div>
    
                <div className="rate-cont width-100per dp-flex justify-cnt-sb pad-15px">
                    <ul className="stars-container dp-flex">
                        <li><i className="bi bi-star-fill font-size-14px color-gold"></i></li>
                        <li><i className="bi bi-star-fill font-size-14px color-gold"></i></li>
                        <li><i className="bi bi-star-fill font-size-14px color-gold"></i></li>
                        <li><i className="bi bi-star-fill font-size-14px color-gold"></i></li>
                        <li><i className="bi bi-star-fill font-size-14px color-gold"></i></li>
                    </ul>
                    <span className="font-size-20px color-moneygreen font-weight-bold">$9999</span>
                </div>
            </figure>
        </a>
        
        </>
    )
}

/* Las siguientes tarjetas solo se han realizado a manera de presentación, y se 
eliminarán en cuanto se empiece a desarrollar la lógica en el frontend  */

