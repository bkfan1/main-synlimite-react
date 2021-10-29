import React from 'react'
import {ProductCard} from "../../ProductCard"
export function TopProductsSection(){
    return(
        <>
        <section className="top-products__section dp-flex flex-dir-col justify-cnt-center width-100per bg-gradient-mainblue">
            <h1 className="top-products__section__title color-white align-self-center">Ofertas del día</h1>
            <p className="time-left__container font-size-26px color-white align-self-center ">00: 00: 00 </p>

            <div className="top-products__container">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        
    </section>
        </>
    )
}