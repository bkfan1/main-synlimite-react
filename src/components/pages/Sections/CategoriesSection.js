import React from 'react'
import { CategoryCard_I } from '../Categories/CategoryCard_I'
import { CategoryCard_II } from '../Categories/CategoryCard_II'
import { CategoryCard_III } from '../Categories/CategoryCard_III'
import { CategoryCard_IV } from '../Categories/CategoryCard_IV'
import { CategoryCard_V } from '../Categories/CategoryCard_V'
import { CategoryCard_VI } from '../Categories/CategoryCard_VI'




export function CategoriesSection(){
    return(
        <>
        <section className="recommended-product-section dp-flex flex-dir-col justify-cnt-center width-100per ">
            <div className="dp-flex width-100per align-items-center justify-cnt-center flex-dir-col mar-bottom-10px pad-bottom-10px">
                <h1 className="reasons-home-title font-weight-bold">Categorías populares</h1>
                <p className="font-size-16px mar-top-5px">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, placeat.</p>
            </div>
            
            <div className="cards-container pad-20px ">
                <CategoryCard_I />
                <CategoryCard_II />
                <CategoryCard_III />
                <CategoryCard_IV />
                <CategoryCard_V />
                <CategoryCard_VI/>
            </div>

        </section>
        
        </>
    )
}