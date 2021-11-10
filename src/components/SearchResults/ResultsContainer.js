import React from 'react'
import { ProductResultCard } from '../SearchResults/ProductResultCard'

export function ResultsContainer(props){
    return(
        <>
        <div className="search-results-container width-100per min-height-100vh bg-color-white">
            <ProductResultCard />
            <ProductResultCard />
            <ProductResultCard />
            <ProductResultCard />
            <ProductResultCard />

        </div>
        </>
    )
}