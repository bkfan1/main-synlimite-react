import React from 'react'
import { FullNavLogged } from '../../components/Common/FullNavLogged'
import {Slider} from '../../components/Common/Slider'
import {Footer} from '../../components/Common/Footer'
import { ProductCard } from '../../components/Common/ProductCard'
import { RecommendedProductSection } from '../../components/Common/RecommendedProductsSection'
import {TopProductsSection} from "../../components/Common/TopProductsSection"


export function HomeLogged(){
    return(
        <>
        <FullNavLogged />
        <Slider />
        <RecommendedProductSection></RecommendedProductSection>
        <TopProductsSection />
        <Footer />
        </>
    )
}

