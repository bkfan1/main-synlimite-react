import React from 'react'
import {FullNavLogged} from "../../components/Common/FullNavLogged"
import { ProductPostCommentary } from '../../components/ProductPost/ProductPostCommentary'
import { ProductPostData } from '../../components/ProductPost/ProductPostData'
import { ProductPostDescription } from '../../components/ProductPost/ProductPostDescription'
import { ProductPostImages } from '../../components/ProductPost/ProductPostImages'
import { SecondaryProductCard } from '../../components/ProductCards/SecondaryProductCard'
import {Footer} from "../../components/Common/Footer"

export function ProductPostLoggedPreview(){
    return(
        <>
        <FullNavLogged />
        <main className="">
            <section className="product-main-info-container dp-flex flex-dir-row flex-wrap-true width-100per pad-top-20px">
                <ProductPostImages />
                <ProductPostData productTitle="" productPrice={0} productWeight={0} productUbication="" productCant={0} />
            </section>

            <ProductPostDescription descriptionText=""/>
            <h1 className="font-size-28px pad-left-20px">Reseñas y opiniones</h1>
            <section className="product-commentaries-section width-100per pad-left-20px pad-right-20px pad-top-10px bg-color-white">
                <div className="product-commentaries-container width-100per">
                    <ProductPostCommentary commentaryText="" authorImage="" authorName="" />
                    <ProductPostCommentary commentaryText="" authorImage="" authorName="" />
                    <ProductPostCommentary commentaryText="" authorImage="" authorName="" />
                    <ProductPostCommentary commentaryText="" authorImage="" authorName="" />
                    <ProductPostCommentary commentaryText="" authorImage="" authorName="" />
                    <ProductPostCommentary commentaryText="" authorImage="" authorName="" />
                </div>
            </section>

            <h1 className="font-size-28px pad-left-20px pad-top-20px">Productos relacionados</h1>
            <section className="related-products-section dp-flex justify-cnt-sb width-100per pad-20px">
                <SecondaryProductCard productTitle="" productImage="" productDescription="" />
                <SecondaryProductCard productTitle="" productImage="" productDescription="" />
                <SecondaryProductCard productTitle="" productImage="" productDescription="" />
                <SecondaryProductCard productTitle="" productImage="" productDescription="" />
                <SecondaryProductCard productTitle="" productImage="" productDescription="" />

            </section>

        </main>
        <Footer />
        
        </>
    )
}