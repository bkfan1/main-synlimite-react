import React from 'react'
import {ProductCard} from "../../ProductCard"
export function TopProductsSection(){
    return(
        <>
        <section class="top-products__section dp-flex flex-dir-col justify-cnt-center width-100per bg-gradient-mainblue">
            <h1 class="top-products__section__title color-white align-self-center">Ofertas del día</h1>
            <p class="time-left__container font-size-26px color-white align-self-center ">00: 00: 00 </p>

            <div class="top-products__container">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        
    </section>
        </>
    )
}