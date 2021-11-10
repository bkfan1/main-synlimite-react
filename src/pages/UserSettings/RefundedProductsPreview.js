import React from 'react'
import { FullNavLogged } from '../../common/FullNavLogged'
import { FilterRefundsForm } from './FilterRefundsForm'
import { PagesList } from '../../common/PagesList'
import { ProductsContainer } from './ProductsContainer'
import { UserPanel } from './UserPanel'
import { Footer } from '../../common/Footer'

export function RefundedProductsPreview(){
    return(
        <>
        <FullNavLogged />
        <main className="dp-flex">
            <UserPanel />
            <section className="dp-flex flex-dir-col width-100per pad-20px bg-color-maingray">
                <h1 className="font-size-28px">Devoluciones</h1>
                <FilterRefundsForm />
                <ProductsContainer />
                <PagesList />
            </section>
        </main>
        <Footer />
        </>
    )
}