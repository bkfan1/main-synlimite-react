import React from 'react'
import {ProductCard} from "../Common/ProductCard"
import { UserPanel } from '../UserSettings/UserPanel'

export function ProductsContainer(){
    return(
        <>
        <div className="settings-purchased-container">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
        </>
    )
}