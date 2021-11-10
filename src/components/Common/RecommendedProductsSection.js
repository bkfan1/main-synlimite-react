import React from 'react'
import { ProductCard } from '../Common/ProductCard'

export function RecommendedProductSection(){
    return(
        <section className="recommended-product-section dp-flex flex-dir-col justify-cnt-center width-100per bg-color-maingray">
            <div className="mar-bottom-20px">
                <h1 className="font-size-26px text-align-center font-weight-bold">Productos recomendados</h1>
            </div>
            <div className="recommended-products-cont">
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
            </div>


    </section>

    )
}