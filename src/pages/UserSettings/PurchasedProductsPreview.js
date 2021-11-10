import React from 'react'
import { FullNavLogged } from '../../components/Common/FullNavLogged'
import { ProductsContainer } from '../../components/UserSettings/ProductsContainer'
import { UserPanel } from '../../components/UserSettings/UserPanel'
import { Footer } from "../../components/Common/Footer"
import { PagesList } from '../../components/Common/PagesList'
import { FilterPurchasedProductForm } from '../../components/UserSettings/FilterPurchasedProductForm'

export function PurchasedProductsPreview(){
    return(
        <>
        <FullNavLogged />
        <main className="dp-flex">
            <UserPanel />
            <section className="dp-flex flex-dir-col width-100per pad-20px bg-color-maingray">
                <h1 className="font-size-28px mar-top-5px mar-bottom-10px">Productos adquiridos</h1>
                <FilterPurchasedProductForm /> 
                <ProductsContainer />
                <PagesList />
            </section>
        </main>
        <Footer />
        </>
    )
}