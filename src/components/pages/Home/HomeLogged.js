import React from 'react'
import { FullNavLogged } from '../../FullNavLogged'
import {Slider} from '../../Slider'
import {Footer} from '../../Footer'
import { ProductCard } from '../../ProductCard'
import { RecommendedProductSection } from '../Sections/RecommendedProductsSection'
import {TopProductsSection} from "../Sections/TopProductsSection"


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

