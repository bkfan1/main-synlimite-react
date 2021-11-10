import React from 'react'
import { ProductResultImage } from '../SearchResults/ProductResultImage'
import { ProductResultTitle } from '../SearchResults/ProductResultTitle'
import { RateList } from '../Common/RateList'
import { ProductResultPrice } from '../SearchResults/ProductResultPrice'



export function ProductResultCard(props){

    return(
        <>
        <div className="product-result dp-flex flex-dir-row width-100per pad-top-20px pad-left-20px pad-bottom-20px">
            <ProductResultImage img=""/>
            
            <div className="product-result-title">
                <ProductResultTitle title="" />
                <RateList />
                <ProductResultPrice price="" />
            </div>

        </div>
        </>
    )

}